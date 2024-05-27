export enum NotificationVariantTypes {
  info = 'info',
  success = 'success',
  warning = 'warning',
  error = 'error',
}

export const NOTIFY_POSITIONS = {
  TOP_RIGHT: 'top-right',
  TOP_CENTER: 'top-center',
  TOP_LEFT: 'top-left',
  BOTTOM_RIGHT: 'bottom-right',
  BOTTOM_CENTER: 'bottom-center',
  BOTTOM_LEFT: 'bottom-left',
} as const;

export const NOTIFY_CONTAINER_CLASSNAME = 'astral-notify-container';

export const NOTIFY_CLASSNAME = 'astral-notify';

export const NOTIFY_ANIMATION_IN_CLASSNAME = 'astral-notify_leave-in';

export const NOTIFY_ANIMATION_OUT_CLASSNAME = 'astral-notify_leave-out';

export const NOTIFY_CLOSE_BUTTON_ANIMATION_OUT_CLASSNAME =
  'astral-notify_close-button_leave-out';

export const NOTIFY_CONTAINER_ID = 'notify-container';

export const NOTIFY_STATIC_CONTAINER_ID = 'static-notify-container';

export const NOTIFY_NO_TRANSITION_ATTR = 'data-no-transition';

export const NOTIFY_HEIGHT = '92px';
