import { dateToView } from '../../utils';
import type { FilteredCommit, CommitType } from '../../types';

interface IMarkdownService {
  getMarkup: (commits: FilteredCommit[], lastVersion: string, startDate: string, endDate: string) => string;
  extractUsByType: (changelog: string, commitType: CommitType) => string[];
};

type Story = Omit<FilteredCommit, 'type'>;

export class MarkdownService implements IMarkdownService {
  constructor(
    private readonly groupHeaders: Record<CommitType, string>,
    private readonly generateBaseLinkToJira: (us: string) => string,
    private readonly generateBaseLinkToStorybook: (component: string) => string,
  ) {}

  getMarkup(commits: FilteredCommit[], lastVersion: string, startDate: string | Date, endDate: string | Date) {
    const flatChangelog = commits.map(({ type, ...story }) => ({
      type,
      story: this.generateChangelogItem(type, story),
    }));

    const groupedChangelog = flatChangelog.reduce<Record<CommitType, string[]>>(
      (acc, { type, story }) => ({
        ...acc,
        [type]: [...(acc[type] || []), story],
      }),
      // иначе необходимо инициализировать аккумулятор, чтобы он удовлетворял типу Record<CommitType, string[]>
      // при генерации changelogBody проверять что массив не пустой
      {} as any,
    );

    const groupedChangelogArray = Object.entries(groupedChangelog) as [CommitType, string[]][];

    const changelogBody = groupedChangelogArray.reduce(
      (acc, [type, stories]) =>
        `${acc}\n\n--- \n\n#### ${this.groupHeaders[type]}\n${stories.join('\n')}`,
      '',
    );

    return (
      this.generateChangelogHeader(lastVersion, startDate, endDate) +
      changelogBody
    );
  }

  extractUsByType(changelog: string, commitType: CommitType) {
    const startPosition = changelog.indexOf(this.groupHeaders[commitType]) + this.groupHeaders[commitType].length;
    const endPosition =  changelog.indexOf('---', startPosition);
    
    return changelog.substring(startPosition, endPosition).trim().split('\n');
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
      return ` - ${component ? `${component}.` : ''} ${title} (${this.generateLinkToJira(us)}).` + (component ? ` Посмотреть в ${this.generateLinkToStorybook(component)}. ` : '') + (version || '');
    }

    return ` - ${component ? `${component}.` : ''} ${title} (${this.generateLinkToJira(us)}). ${version || ''}`;
  }

  private generateLinkToJira(us: string) {
    return `[#${us}](${this.generateBaseLinkToJira(us)})`;
  }

  private generateLinkToStorybook(component: string) {
    return `[storybook](${this.generateBaseLinkToStorybook(component)})`;
  }
}
