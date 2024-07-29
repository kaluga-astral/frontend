import { type ReactNode } from 'react';

export type Step = {
  label?: ReactNode;
  isError?: boolean;
  stepContent?: ReactNode;
};
