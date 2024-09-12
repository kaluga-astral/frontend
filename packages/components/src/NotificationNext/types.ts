import { type ReactNode } from 'react';
import { type ToastOptions } from 'react-toastify-next/dist/types';
import {
  type Id,
  type ToastContent,
  type UpdateOptions,
} from 'react-toastify-next';

export type VariantWithoutProgress = 'success' | 'warning' | 'info' | 'error';

export type Variant = VariantWithoutProgress | 'progress';

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
   * Флаг управления цветовым фоном уведомления, если true то фон, например success будет зеленым
   * @default true
   * @example notify.success('title', { filled: false })
   * */
  filled?: boolean;

  /**
   * Опциональный контент нотификации, может быть управляемой реакт нодой
   * @example notify.success('title', { content: <div>Hello notify</div> })
   * */
  content?: ReactNode;

  /**
   * React-элемент предполагающий наличие кнопок для кастомных взаимодействий с пользователем
   * @example notify.success('title', { actions: <button>lorem ipsum</button> })
   * */
  actions?: JSX.Element;

  /**
   * Местоположение кастомных кнопок активностей, слева или справа
   * @default right
   * @example notify.success('title', { actionsDirection: 'left' })
   * */
  actionsDirection?: ActionsDirection;

  /**
   * Опциональная иконка, которая будет подменять стандартную
   * @default зависит от Variant нотификации, например Variant="success" иконка "Зеленая галочка"
   */
  icon?: ReactNode;

  /**
   * Опциональный пропс, позволяющий отключить кнопку рендера крестика закрытия нотификации
   * @default true
   */
  showCloseButton?: boolean;

  /**
   * Опциональный пропс, позволяющий сделать уведомление статичным (отключается таймер и прогресс-бар),
   * а так же выводящий его в отдельном контейнере.
   * Необходимо использовать только в паре с контейнером со стеком (NotificationStackContainer)
   * @default false
   */
  isStatic?: boolean;
};

type NotificationOptions = Omit<NotificationProps, 'title'>;

type NotificationFunction = (
  title: NotificationProps['title'],
  options?: NotificationOptions,
) => number | string;

type NotificationProgressOptions = Omit<
  NotificationOptions,
  | 'hideProgressBar'
  | 'icon'
  | 'isStatic'
  | 'progress'
  | 'progressClassName'
  | 'progressStyle'
  | 'toastId'
>;

type NotificationProgressFunction = (
  title: NotificationProps['title'],
  options?: NotificationProgressOptions,
) => void;

type Controllable = {
  /**
   * Метод создания полностью кастомной нотификации
   */
  custom: (content: ToastContent, options?: ToastOptions) => Id;

  /**
   * force метод для закрытия всех нотификаций, либо конкретной по айдишке
   */
  dismiss: (id?: Id) => void;

  /**
   * Метод обновления конкретной нотификации,
   * пригодится когда имеется контролируемый прогресс бар
   */
  update: (id: Id, options?: UpdateOptions) => void;

  /**
   * Метод закрывающий нотификацию с контролируемым прогресс баром
   */
  done: (id: Id) => void;
};

export type Notify = Record<VariantWithoutProgress, NotificationFunction> &
  Controllable & {
    progress: (
      title: NotificationProps['title'],
      options?: NotificationProgressOptions,
    ) => {
      update: NotificationProgressFunction;
      success: NotificationProgressFunction;
      error: NotificationProgressFunction;
    };
  };
