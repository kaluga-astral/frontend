import { dateToView } from '../../utils';
import type { Commit, CommitType } from '../../types';

interface IMarkdownService {
  getMarkup: (commits: Commit[], lastVersion: string, startDate: string, endDate: string) => string;
};

type Story = Omit<Commit, 'type'>;

export class MarkdownService implements IMarkdownService {
  constructor(private readonly groupHeaders: any, private readonly generateBaseLinkToJira: any, private readonly generateBaseLinkToStorybook: any) {}

  getMarkup(commits: Commit[], lastVersion: string, startDate: string | Date, endDate: string | Date) {
    const flatChangelog = commits.map(({ type, ...story }) => ({
      type,
      story: this.generateChangelogItem(type, story),
    }));

    const groupedChangelog = flatChangelog.reduce(
      (acc, { type, story }) => ({
        ...acc,
        [type]: [...(acc[type] || []), story],
      }),
      {},
    ) as Record<CommitType, string[]>;

    const changelogBody = Object.entries(groupedChangelog).reduce(
      (acc, [type, stories]: [any, string[]]) =>
        `${acc}\n\n--- \n\n#### ${this.groupHeaders[type]}\n${stories.join('\n')}`,
      '',
    );

    return (
      this.generateChangelogHeader(lastVersion, startDate, endDate) +
      changelogBody
    );
  }

  private generateChangelogHeader(lastVersion: string, startDate: string | Date, endDate: string | Date) {
    return (
      `# Новое за период с ${dateToView(startDate)} по ${dateToView(endDate)} \n\n` +
      `##### Актуальная версия пакетов на ${dateToView(endDate)} - ${lastVersion}`
    );
  }

  private generateChangelogItem(type: CommitType, story: Story) {
    const { component, title, us, version } = story;

    if (Object.is(type, 'feat')) {
      return ` - ${component ? `${component}.` : ''} ${title} (${this.generateLinkToJira(us)}). Посмотреть в ${this.generateLinkToStorybook(component)}. ${version}`;
    }

    return ` - ${component ? `${component}.` : ''} ${title} (${this.generateLinkToJira(us)}). ${version}`;
  }

  private generateLinkToJira(us: string) {
    return `[#${us}](${this.generateBaseLinkToJira(us)})`;
  }

  private generateLinkToStorybook(component: string) {
    return `[storybook](${this.generateBaseLinkToStorybook(component)})`;
  }
}
