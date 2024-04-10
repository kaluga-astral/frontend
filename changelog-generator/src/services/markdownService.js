/* eslint-disable class-methods-use-this */
/* eslint-disable no-underscore-dangle */
const { dateToView } = require('../utils');

class MarkdownService {
  constructor(groupHeaders, generateLinkToJira, generateLinkToStorybook) {
    this._groupHeaders = groupHeaders;
    this._generateLinkToJira = generateLinkToJira;
    this._generateLinkToStorybook = generateLinkToStorybook;
  }

  getMarkup(commits, lastVersion, startDate, endDate) {
    const flatChangelog = commits.map(({ type, ...story } = {}) => ({
      type,
      story: this.#generateChangelogItem(type, story),
    }));

    const groupedChangelog = flatChangelog.reduce(
      (acc, { type, story }) => ({
        ...acc,
        [type]: [...(acc[type] || []), story],
      }),
      {},
    );

    const changelogBody = Object.entries(groupedChangelog).reduce(
      (acc, [type, stories]) =>
        `${acc}\n\n--- \n\n#### ${this._groupHeaders[type]}\n${stories.join('\n')}`,
      '',
    );

    return (
      this.#generateChangelogHeader(lastVersion, startDate, endDate) +
      changelogBody
    );
  }

  #generateChangelogHeader(lastVersion, startDate, endDate) {
    return (
      `# Новое за период с ${dateToView(startDate)} по ${dateToView(endDate)} \n\n` +
      `##### Актуальная версия пакетов на ${dateToView(endDate)} - ${lastVersion}`
    );
  }

  #generateChangelogItem(type, story) {
    const { component, title, us, version } = story;

    if (Object.is(type, 'feat')) {
      return ` - ${component ? `${component}.` : ''} ${title} (${this.#generateLinkToJira(us)}). Посмотреть в ${this.#generateLinkToStorybook(component)}. ${version}`;
    }

    return ` - ${component ? `${component}.` : ''} ${title} (${this.#generateLinkToJira(us)}). ${version}`;
  }

  #generateLinkToJira(us) {
    return `[#${us}](${this._generateLinkToJira(us)})`;
  }

  #generateLinkToStorybook(component) {
    return `[storybook](${this._generateLinkToStorybook(component)})`;
  }
}

module.exports = { MarkdownService };
