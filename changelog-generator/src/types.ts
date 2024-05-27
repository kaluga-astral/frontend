export type CommitType =  'feat' | 'refactor' | 'bug' |'test' | 'chore' | 'build' |'doc';

export type Commit = {
  type: CommitType | undefined;
  version: string | undefined;
  title: string | undefined;
  us: string | undefined;
  component: string | undefined;
};

export type FilteredCommit = Omit<Commit, 'type' | 'us'> & { type: CommitType; us: string };
