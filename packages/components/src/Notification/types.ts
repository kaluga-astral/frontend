import { ReactNode } from 'react';
import { ToastOptions } from 'react-toastify/dist/types';

export type Variant = 'success' | 'warning' | 'info' | 'error';

export type ActionsDirection = 'right' | 'left';

export type NotificationProps = Omit<
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
  | 'closeButton'
  | 'transition'
  | 'draggableDirection'
  | 'role'
  | 'containerId'
  | 'rtl'
  | 'icon'
  | 'theme'
> & {
  /**
   * @description Элемент заголовка, может быть контролируемой реакт нодой
   * @example notify.success('title')
   * */
  title: ReactNode;
  /**
   * @description флаг управления цветовым фоном уведомления, если true то фон, например success будет зеленым
   * @default true
   * @example notify.success('title', { filled: false })
   * */
  filled?: boolean;
  /**
   * @description опциональный контент нотификации, может быть управляемой реакт нодой
   * @example notify.success('title', { content: <div>Hello notify</div> })
   * */
  content?: ReactNode;
  /**
   * @description реакт элемент предполагающий наличие кнопок для кастомных взаимодействий с пользователем
   * @example notify.success('title', { actions: <button>lorem ipsum</button> })
   * */
  actions?: JSX.Element;
  /**
   * @description местоположение кастомных кнопок активностей, слева или справа
   * @default right
   * @example notify.success('title', { actionsDirection: 'left' })
   * */
  actionsDirection?: ActionsDirection;
  /**
   * @description опциональная иконка, которая будет подменять стандартную
   * @default зависит от Variant нотификации, например Variant="success" иконка "Зеленая галочка"
   */
  icon?: ReactNode;
  /**
   * @description опциональный пропс позволяющий отключить кнопку рендера крестика закрытия нотификации
   * @default true
   */
  showCloseButton?: boolean;
};
