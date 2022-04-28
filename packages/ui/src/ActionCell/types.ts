import { ReactNode } from 'react';

export type Action<T> = {
  Icon: ReactNode;
  onClick: (row: T) => void;
  name: string;
};

export type ActionCellProps<T> = {
  actions: Action<T>[];
  row: T;
};
