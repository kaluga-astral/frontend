import { type ReactNode } from 'react';

export type Steps = {
  label?: ReactNode;
  error?: boolean;
  stepContent?: ReactNode;
}[];
