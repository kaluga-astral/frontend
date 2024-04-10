const gitlog = require('gitlog').default;

const { CHANGELOG_DIR_PATH, PERIOD_IN_DAYS } = require('./config');
const {
  dateToView,
  generateLinkToJira,
  generateLinkToStorybook,
  parseCommit,
  subtractDays,
} = require('./utils/index');
const { FileService, MarkdownService } = require('./services/index');
const { COMMIT_TYPE, GROUP_HEADERS } = require('./constants');

const currentDate = new Date();
const startDate = subtractDays(currentDate, PERIOD_IN_DAYS);
const endDate = currentDate;

const results = gitlog({
  after: startDate,
  before: endDate,
  repo: __dirname,
  number: 100,
  fields: ['tag', 'subject', 'authorName', 'body'],
});

const parseResults = results.map(parseCommit);

// Удаляем промежуточные коммиты
const filteredParseResults = parseResults.filter(({ version, type } = {}) => {
  if (!type) {
    return false;
  }

  // Для всех коммитов, кроме коммитов с типами doc, chore и test должна быть указана версия
  if (
    !version &&
    ![COMMIT_TYPE.Doc, COMMIT_TYPE.Chore, COMMIT_TYPE.Test].includes(type)
  ) {
    return false;
  }

  return true;
});

const lastCommitWithVersion = filteredParseResults.find(({ version } = {}) =>
  Boolean(version),
);

const markdownService = new MarkdownService(
  GROUP_HEADERS,
  generateLinkToJira,
  generateLinkToStorybook,
);

const markdownMarkup = markdownService.getMarkup(
  filteredParseResults,
  lastCommitWithVersion.version,
  startDate,
  endDate,
);

const fileName = `${dateToView(startDate)} - ${dateToView(endDate)}.md`;

FileService.writeFile(`${CHANGELOG_DIR_PATH}/${fileName}`, markdownMarkup);
