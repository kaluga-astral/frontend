import path from 'path';

const { JIRA_URL, STORYBOOK_URL, TELEGRAM_TOKEN, TELEGRAM_CHAT_ID } = process.env; 

export { JIRA_URL, STORYBOOK_URL, TELEGRAM_TOKEN, TELEGRAM_CHAT_ID }

/**
 * Путь до директории, куда сохраняем md-файлы
 */
export const CHANGELOG_DIR_PATH = path.resolve(__dirname, '..', '..', 'changelog');

/**
 * Адрес до директории с ченжлогом
 */
export const CHANGELOG_DIR_URL = 'https://github.com/kaluga-astral/frontend/blob/main/changelog/';

/**
 * Кол-во дней периода, за который генерируем changelog
 */
export const PERIOD_IN_DAYS = 7;
