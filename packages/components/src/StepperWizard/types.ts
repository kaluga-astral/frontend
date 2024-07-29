import { type ReactNode } from 'react';

export type StepWizard = {
  label: ReactNode;
  isError?: boolean;
  stepContent?: ReactNode;
};
