const { JIRA_URL, STORYBOOK_URL } = require('../config');

const generateLinkToJira = (storyNumber) => `${JIRA_URL}${storyNumber}`;

const generateLinkToStorybook = (componentName) =>
  `${STORYBOOK_URL}?path=/docs/components-${componentName?.toLowerCase()}--docs`;

module.exports = { generateLinkToJira, generateLinkToStorybook };
