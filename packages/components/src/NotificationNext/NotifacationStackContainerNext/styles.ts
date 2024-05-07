import { ToastContainer } from 'react-toastify-next';

import { Button } from '../../Button';
import { keyframes, styled } from '../../styles';
import {
  NOTIFY_CLASSNAME,
  NOTIFY_CONTAINER_CLASSNAME,
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

  width: 424px;

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

  /* Для контейнера с стандартными уведомлениями показываем в стеке не более 3-x */
  .Toastify:not(:last-child) {
    .${NOTIFY_CLASSNAME} {
      &:not(:nth-last-child(-n + 3)) {
        transform: unset;

        opacity: 0;
      }
    }
  }

  .${NOTIFY_CLASSNAME} {
    overflow: hidden !important;

    width: 400px;
    height: 92px;
    padding: 0;

    box-shadow: ${({ theme }) => theme.elevation[300]};

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
`;

export const Inner = styled(ToastContainer)`
  position: relative !important;
  right: 0 !important;
  bottom: 0 !important;

  width: 100%;
  min-width: 400px;
  max-width: 424px;
  padding-bottom: 0 !important;

  &:hover {
    overflow-y: auto;

    width: 100%;
    height: 100%;

    .${NOTIFY_CLASSNAME} {
      position: relative;
      transform: unset;

      height: auto;
      min-height: 92px;

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
  margin-left: ${({ theme }) => theme.spacing(4)};

  animation: ${fade} 500ms linear;
`;
