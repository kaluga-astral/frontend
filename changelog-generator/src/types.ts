export type CommitType =  'feat' | 'refactor' | 'bug' |'test' | 'chore' | 'build' |'doc';

export type Commit = {
  us: string;
  title: string;
  type: CommitType | null;
  component: string | null;
  version: string | null;
};
