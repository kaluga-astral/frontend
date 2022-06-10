import { ReactNode } from 'react';
import { ToastOptions } from 'react-toastify/dist/types';

export type Variant = 'success' | 'warning' | 'info' | 'error';

export type ActionsDirection = 'right' | 'left';

export interface NotificationProps
  extends Omit<
    ToastOptions,
    | 'className'
    | 'style'
    | 'isLoading'
    | 'bodyClassName'
    | 'bodyStyle'
    | 'onOpen'
    | 'onClose'
    | 'type'
    | 'toastId'
    | 'updateId'
    | 'data'
    | 'progressClassName'
    | 'closeButton'
    | 'transition'
    | 'draggableDirection'
    | 'role'
    | 'containerId'
    | 'rtl'
    | 'icon'
    | 'theme'
  > {
  /**
   * @example notify.success('title')
   * */
  title: string;
  /**
   * @default true
   * @example notify.success('title', { filled: false })
   * */
  filled?: boolean;
  /**
   * @example notify.success('title', { content: <div>Hello notify</div> })
   * */
  content?: ReactNode;
  /**
   * @example notify.success('title', { actions: <div>Hello notify action</div> })
   * */
  actions?: JSX.Element;
  /**
   * @example notify.success('title', { actionsDirection: 'left' })
   * */
  actionsDirection?: ActionsDirection;
}
