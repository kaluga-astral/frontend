import { type ReactNode } from 'react';
import { type ToastOptions } from 'react-toastify/dist/types';
import { type Id, type ToastContent, type UpdateOptions } from 'react-toastify';

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
  | 'rtl'
  | 'icon'
  | 'theme'
> & {
  /**
   * Элемент заголовка, может быть контролируемой реакт нодой
   * @example notify.success('title')
   * */
  title: ReactNode;
  /**
   * флаг управления цветовым фоном уведомления, если true то фон, например success будет зеленым
   * @default true
   * @example notify.success('title', { filled: false })
   * */
  filled?: boolean;
  /**
   * опциональный контент нотификации, может быть управляемой реакт нодой
   * @example notify.success('title', { content: <div>Hello notify</div> })
   * */
  content?: ReactNode;
  /**
   * реакт элемент предполагающий наличие кнопок для кастомных взаимодействий с пользователем
   * @example notify.success('title', { actions: <button>lorem ipsum</button> })
   * */
  actions?: JSX.Element;
  /**
   * местоположение кастомных кнопок активностей, слева или справа
   * @default right
   * @example notify.success('title', { actionsDirection: 'left' })
   * */
  actionsDirection?: ActionsDirection;
  /**
   * опциональная иконка, которая будет подменять стандартную
   * @default зависит от Variant нотификации, например Variant="success" иконка "Зеленая галочка"
   */
  icon?: ReactNode;
  /**
   * опциональный пропс позволяющий отключить кнопку рендера крестика закрытия нотификации
   * @default true
   */
  showCloseButton?: boolean;
};

type NotificationOptions = Omit<NotificationProps, 'title'>;

type NotificationFunction = (
  title: NotificationProps['title'],
  options?: NotificationOptions,
) => number | string;

type Controllable = {
  /**
   * метод создания полностью кастомной нотификации
   */
  custom: (content: ToastContent, options?: ToastOptions) => Id;
  /**
   * force метод для закрытия всех нотификаций, либо конкретной по айдишке
   */
  dismiss: (id?: Id) => void;
  /**
   * метод обновления конкретной нотификации,
   * пригодится когда имеется контролируемый прогресс бар
   */
  update: (id: Id, options?: UpdateOptions) => void;
  /**
   * метод закрывающий нотификацию с контролируемым прогресс баром
   */
  done: (id: Id) => void;
};

export type Notify = Record<Variant, NotificationFunction> & Controllable;
