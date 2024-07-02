import { ToastContainer } from 'react-toastify-next';

import { Button } from '../../Button';
import { keyframes, styled } from '../../styles';
import {
  NOTIFY_ANIMATION_IN_CLASSNAME,
  NOTIFY_ANIMATION_OUT_CLASSNAME,
  NOTIFY_CLASSNAME,
  NOTIFY_CLOSE_BUTTON_ANIMATION_OUT_CLASSNAME,
  NOTIFY_CONTAINER_CLASSNAME,
  NOTIFY_HEIGHT,
  NOTIFY_NO_TRANSITION_ATTR,
  NotificationVariantTypes,
} from '../constants';

const fade = keyframes`
  from {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const leaveIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0px);
  }
`;

const leaveOut = keyframes`
  from {
    transform: translateX(0px);
  }
  to {
    transform: translateX(100%);
    visibility: hidden;
  }
`;

// используем дополнительный враппер,
// потому что styled для ToastContainer не умеет работать с theme внутри
// использовать бэм классы для стилизации пришлось,
// потому что react-toastify не предоставляет,
// достаточно контейнеров для стилизации через styled,
// к примеру добраться до прогресс бара можно только через цсс классы
export const Wrapper = styled.div`
  position: fixed;
  z-index: ${({ theme }) => theme.zIndex.snackbar};
  right: 0;
  bottom: 0;

  width: 432px;

  &.${NOTIFY_CONTAINER_CLASSNAME} {
    display: flex;
    flex-direction: column;
    justify-content: end;

    height: 100vh;

    @supports (height: 100dvh) {
      height: 100dvh;
    }

    .Toastify:not(:last-child) {
      overflow: hidden;
    }
  }

  .${NOTIFY_ANIMATION_IN_CLASSNAME} {
    animation: ${leaveIn} ease-in-out 0.34s;
    animation-fill-mode: both;
  }

  .${NOTIFY_ANIMATION_OUT_CLASSNAME} {
    animation: ${leaveOut} ease-in-out 0.34s;
    animation-fill-mode: both;
  }

  .${NOTIFY_CLASSNAME} {
    overflow: hidden !important;

    width: 400px;
    height: ${NOTIFY_HEIGHT};
    margin-bottom: ${({ theme }) => theme.spacing(3)};
    padding: 0;

    box-shadow: ${({ theme }) => theme.elevation[300]};

    transition: ${({ theme }) =>
      theme.transitions.create(['transform', 'margin-bottom'], {
        duration: theme.transitions.duration.short,
        easing: 'ease-in-out',
      })};

    &::after {
      content: '';

      position: absolute;
      top: 0;
      left: 0;

      display: none;

      width: 100%;
      height: 3px;
    }

    .Toastify__progress-bar--wrp {
      top: 0;

      height: 3px;
    }

    &--${NotificationVariantTypes.info} {
      --toastify-color-progress-light: ${({ theme }) =>
        theme.palette.primary[800]};

      &::after {
        background-color: ${({ theme }) => theme.palette.primary[100]};
      }
    }
    &--${NotificationVariantTypes.success} {
      --toastify-color-progress-light: ${({ theme }) =>
        theme.palette.success.dark};

      &::after {
        background-color: ${({ theme }) => theme.palette.success.light};
      }
    }
    &--${NotificationVariantTypes.warning} {
      --toastify-color-progress-light: ${({ theme }) =>
        theme.palette.warning.dark};

      &::after {
        background-color: ${({ theme }) => theme.palette.warning.light};
      }
    }
    &--${NotificationVariantTypes.error} {
      --toastify-color-progress-light: ${({ theme }) =>
        theme.palette.error.dark};

      &::after {
        background-color: ${({ theme }) => theme.palette.error.light};
      }
    }

    &__body {
      margin: 0;
      padding: 0;
    }
  }

  .${NOTIFY_CLASSNAME}__content {
    overflow: hidden;

    max-height: 0;
    margin-top: 0;
  }

  .${NOTIFY_CLASSNAME}__footer {
    margin-bottom: ${({ theme }) => theme.spacing(-3)};

    transition: ${({ theme }) =>
      theme.transitions.create(['margin-bottom'], {
        duration: theme.transitions.duration.short,
        easing: theme.transitions.easing.easeInOut,
      })};
  }

  /* Стили для уведомлений в стеке */
  .Toastify:not(:last-child) {
    .${NOTIFY_CLASSNAME} {
      position: relative;
      transform: scale(var(--s));

      &:not(:last-of-type) {
        margin-bottom: calc(
          ${({ theme }) => theme.spacing(4)} - ${NOTIFY_HEIGHT}
        );
      }

      /* В свернутом виде показываем не более 3-x уведомлений */
      &:not(:nth-last-child(-n + 3)) {
        margin-bottom: -${NOTIFY_HEIGHT};

        opacity: 0;
      }

      /* Отключаем анимацию при появлении нового уведомления */
      &[${NOTIFY_NO_TRANSITION_ATTR}='true'] {
        transition-duration: 0s !important;
      }
    }
  }
`;

export const Inner = styled(ToastContainer)`
  position: relative !important;
  right: 0 !important;
  bottom: 0 !important;

  width: 100%;
  min-width: 400px;
  max-width: 432px;
  padding-bottom: 0 !important;
  padding-left: ${({ theme }) => theme.spacing(3)} !important;

  &:hover {
    overflow: hidden auto;

    width: 100%;
    height: 100%;

    .${NOTIFY_CLASSNAME} {
      position: relative;
      transform: unset;

      height: auto;
      min-height: ${NOTIFY_HEIGHT};
      margin-bottom: ${({ theme }) => theme.spacing(3)} !important;

      opacity: 1 !important;
    }

    .${NOTIFY_CLASSNAME}__content {
      max-height: 400px;
      margin: ${({ theme }) => theme.spacing(2, 0, 0, 8)};

      animation: ${fade} 500ms linear;
    }

    .${NOTIFY_CLASSNAME}__footer {
      margin-bottom: 0;
    }

    .Toastify__toast--stacked::before {
      display: none;
    }
  }
`;

export const CloseButton = styled(Button)`
  right: ${({ theme }) => theme.spacing(3)};

  width: 400px;
  margin-top: ${({ theme }) => theme.spacing(2)};
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  margin-left: ${({ theme }) => theme.spacing(6)};

  box-shadow: ${({ theme }) => theme.elevation[300]};

  animation: ${fade} 500ms linear;

  &:hover {
    box-shadow: ${({ theme }) => theme.elevation[300]};
  }

  &.${NOTIFY_CLOSE_BUTTON_ANIMATION_OUT_CLASSNAME} {
    opacity: 0;
  }
`;
