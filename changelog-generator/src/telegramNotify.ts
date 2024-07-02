import path from 'path';

import { CHANGELOG_DIR_PATH, PERIOD_IN_DAYS, TELEGRAM_CHAT_ID, TELEGRAM_TOKEN } from './config';
import {
  dateToView,
  generateLinkToChangelog,
  generateLinkToJira,
  generateLinkToStorybook,
  subtractDays,
} from './utils';
import { FileService, MarkdownService, TelegramService } from './services';
import { COMMIT_TYPE, GROUP_HEADERS } from './constants';

const currentDate = new Date();
const startDate = subtractDays(currentDate, PERIOD_IN_DAYS);
const endDate = currentDate;

const fileName = `${dateToView(startDate)} - ${dateToView(endDate)}.md`;

const markdownService = new MarkdownService(
  GROUP_HEADERS,
  generateLinkToJira,
  generateLinkToStorybook,
);

const markdownMarkup = FileService.readFile(path.resolve(CHANGELOG_DIR_PATH, fileName));

const lastVersion = markdownService.extractLastVersion(markdownMarkup);

const featuresList = markdownService.extractUsByType(markdownMarkup, COMMIT_TYPE.Feat);

// Выводим до 5 us из раздела Features
const changelogFeatures = featuresList.slice(0, 5).join('\n');

const telegramService = new TelegramService(TELEGRAM_TOKEN as string, TELEGRAM_CHAT_ID as string, generateLinkToChangelog);

const message = telegramService.generateMessage({ startDate, endDate, lastVersion, fileName, changelogFeatures });

telegramService.sendMessage(message)
  .then(() => console.log('Сообщение успешно отправлено в Telegram-канал'))
  .catch((error) => {
    console.error('Ошибка при отправки сообщения в Telegram-канал: ', error);
    process.exit(1);
  });
