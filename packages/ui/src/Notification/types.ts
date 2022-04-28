import { ReactNode } from 'react';

export type Variant = 'success' | 'warning' | 'info' | 'error';
export type ActionsDirection = 'right' | 'left';

export interface NotificationProps {
  title: string;
  filled?: boolean;
  content?: ReactNode;
  actions?: JSX.Element;
  actionsDirection?: ActionsDirection;
}
