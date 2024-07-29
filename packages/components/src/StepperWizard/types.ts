import { type ReactNode } from 'react';

export type StepInfo = {
  label?: ReactNode;
  isError?: boolean;
  stepContent?: ReactNode;
};
