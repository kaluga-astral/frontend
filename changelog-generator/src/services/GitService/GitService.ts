import gitlog from 'gitlog';

import type { Commit, CommitType } from '../../types';

interface IGitService {
  getCommitList: (startDate: Date, endDate: Date) => Array<Commit>;
};

type ParseMetaResult = {
  type: CommitType | undefined;
  us: string | undefined;
  component: string | undefined;
};

export class GitService implements IGitService {
  getCommitList(startDate: Date, endDate: Date): Array<Commit> {
    const results = gitlog({
      // after и before указано что принимает только string, но по факту работает с объектом Date
      after: startDate as unknown as string,
      before: endDate as unknown as string,
      repo: __dirname,
      number: 100,
      fields: ['tag', 'subject', 'authorName', 'body'],
    });

    return results.map(this.parseCommit.bind(this));
  }

  private parseCommit({ tag, subject }: { tag: string; subject: string }): Commit {
    const [meta, description] = subject.split(':');
  
    if (!meta || !description) {
      return {
        version: undefined,
        type: undefined,
        us: undefined,
        component: undefined,
        title: undefined,
      };
    }
  
    const version = this.parseVersion(tag);
  
    const { type, us, component } = this.parseMeta(meta);
  
    const title = this.formatTitle(description);
  
    return {
      version,
      type,
      us,
      component,
      title,
    };
  }

  private formatTitle(title: string) {
    if (!title) {
      return undefined;
    }
  
    // Удаляем все содержимое и скобки (...)
    return title.replace(/\([^)]*\)/g, '').trim();
  }

  private parseVersion(tag: string) {
    const versionMatch = tag.match(/tag: (v[\d.]+)/);
  
    return versionMatch ? versionMatch[1] : undefined;
  }
  
  private parseMeta(meta: string) {
    const result = meta.match(/([^(\s]+)\(([^)]+)\)/);
    const [, type, info = ''] = result || [];
  
    const [us, pack, component] = info.split(',');
  
    return {
      type,
      us,
      component: component || pack,
    } as ParseMetaResult;
  }
};
