import { ReactNode } from 'react';
import { ToastOptions } from 'react-toastify/dist/types';

export type Variant = 'success' | 'warning' | 'info' | 'error';
export type ActionsDirection = 'right' | 'left';

export interface NotificationProps
  extends Omit<
    ToastOptions,
    | 'className'
    | 'style'
    | 'delay'
    | 'isLoading'
    | 'data'
    | 'bodyClassName'
    | 'bodyStyle'
  > {
  title: string;
  filled?: boolean;
  content?: ReactNode;
  actions?: JSX.Element;
  actionsDirection?: ActionsDirection;
}
