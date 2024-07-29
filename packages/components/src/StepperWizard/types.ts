import { type ReactNode } from 'react';

export type Steps = {
  label?: ReactNode;
  isError?: boolean;
  stepContent?: ReactNode;
}[];
