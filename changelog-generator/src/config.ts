import path from 'path';

const { JIRA_URL, STORYBOOK_URL } = process.env; 

export { JIRA_URL, STORYBOOK_URL }

/**
 * Путь до директории, куда сохраняем md-файлы
 */
export const CHANGELOG_DIR_PATH = path.resolve(__dirname, '..', '..', 'changelog');

/**
 * Кол-во дней периода, за который генерируем chahgelog
 */
export const PERIOD_IN_DAYS = 14;
