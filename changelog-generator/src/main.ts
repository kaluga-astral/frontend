import path from 'path';

import { CHANGELOG_DIR_PATH, PERIOD_IN_DAYS, TELEGRAM_CHAT_ID, TELEGRAM_TOKEN } from './config';
import {
  dateToView,
  generateLinkToChangelog,
  generateLinkToJira,
  generateLinkToStorybook,
  subtractDays,
} from './utils';
import { GitService, FileService, MarkdownService, TelegramService } from './services';
import { COMMIT_TYPE, GROUP_HEADERS } from './constants';
import type { FilteredCommit } from './types';

const currentDate = new Date();
const startDate = subtractDays(currentDate, PERIOD_IN_DAYS);
const endDate = currentDate;

const gitlog = new GitService();
const results = gitlog.getCommitList(startDate, endDate);

// Удаляем промежуточные коммиты
const filteredParseResults = results.filter((commit) => {
  if (!commit?.type || !commit?.us) {
    return false;
  }

  // Для всех коммитов, кроме коммитов с типами doc, chore и test должна быть указана версия
  if (
    !commit?.version &&
    // ts некорректно обрабатывает includes
    ![COMMIT_TYPE.Doc, COMMIT_TYPE.Chore, COMMIT_TYPE.Test].includes(commit.type as any)
  ) {
    return false;
  }

  return true;
}) as FilteredCommit[];

const lastCommitWithVersion = filteredParseResults.find((commit) =>
  Boolean(commit?.version),
);

const markdownService = new MarkdownService(
  GROUP_HEADERS,
  generateLinkToJira,
  generateLinkToStorybook,
);

const lastVersion = lastCommitWithVersion?.version || ''

const markdownMarkup = markdownService.getMarkup(
  filteredParseResults,
  lastVersion,
  startDate,
  endDate,
);

const fileName = `${dateToView(startDate)} - ${dateToView(endDate)}.md`;

FileService.writeFile(path.resolve(CHANGELOG_DIR_PATH, fileName), markdownMarkup);

const telegramService = new TelegramService(TELEGRAM_TOKEN as string, TELEGRAM_CHAT_ID as string, generateLinkToChangelog);

const featuresList = markdownService.extractUsByType(markdownMarkup, COMMIT_TYPE.Feat);
// Выводим до 5 us из раздела Features
const changelogFeatures = featuresList.slice(0, 5).join('\n');

const message = telegramService.generateMessage({ startDate, endDate, lastVersion, fileName, changelogFeatures });

telegramService.sendMessage(message)
  .then(() => console.log('Сообщение успешно отправлено в Telegram-канал'))
  .catch((error) => {
    console.error('Ошибка при отправки сообщения в Telegram-канал: ', error);
    process.exit(1);
  });
