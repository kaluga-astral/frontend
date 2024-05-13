import { Telegraf } from 'telegraf';
import { type Message } from '@telegraf/types/message';

import { dateToView } from '../../utils';

type ParseMode = "Markdown" | "MarkdownV2" | "HTML";

type GetMessageParams = {
  startDate: string | Date;
  endDate: string | Date;
  lastVersion: string;
  fileName: string;
  changelogFeatures: string;
};

interface ITelegramService {
  generateMessage: (params: GetMessageParams) => string;
  sendMessage: (message: string, parse_mode: ParseMode ) => Promise<Message.TextMessage>;
}

export class TelegramService implements ITelegramService {
  private bot;

  constructor(
    private readonly token: string,
    private readonly chatId: number | string,
    private readonly generateBaseLinkToChangelog: (fileName: string, section?: string) => string,
  ) {
    this.bot = new Telegraf(this.token);
  }

  generateMessage({ startDate, endDate, lastVersion, fileName, changelogFeatures}: GetMessageParams) {
    const startMsgTemplate =
      `***🆕🚀🚀 Дайджест Frontend.Shared с ${dateToView(startDate)} по ${dateToView(endDate)}***\n\n\n` +
      `Актуальная версия пакетов на ${dateToView(endDate)} - ***${lastVersion}***\n\n\n` + `***✨ Features***\n\n`;

    const endMsgTemplate =
      `👀 Полный список реализованных фич можно посмотреть ${this.generateLinkToChangelog('здесь', fileName, 'features')}\n\n\n` +
      `***🐞 Bugs***\n\n` +
      `Список исправленных багов смотрим ${this.generateLinkToChangelog('тут', fileName, 'bugs')} 👈`;

    return startMsgTemplate + changelogFeatures + '\n\n' + endMsgTemplate;
  }

  sendMessage(message: string, parseMode: ParseMode = 'Markdown') {
    return this.bot.telegram.sendMessage(this.chatId, message, { parse_mode: parseMode })
  }

  private generateLinkToChangelog(title: string, fileName: string, section?: string) {
    return `[${title}](${this.generateBaseLinkToChangelog(fileName, section)})`;
  }
};
