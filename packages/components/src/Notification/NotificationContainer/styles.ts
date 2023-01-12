import { ToastContainer as ExternalToastContainer } from 'react-toastify';

import { styled } from '../../styles';
import { NOTIFY_CLASSNAME, NotificationVariantTypes } from '../constants';

// используем дополнительный враппер,
// потому что styled для ToastContainer не умеет работать с theme внутри
// использовать бэм классы для стилизации пришлось,
// потому что react-toastify не предоставляет,
// достаточно контейнеров для стилизации через styled,
// к примеру добраться до прогресс бара можно только через цсс классы
export const NotificationsWrapper = styled.div`
  .${NOTIFY_CLASSNAME} {
    padding: 0;

    &--${NotificationVariantTypes.info} {
      --toastify-color-progress-light: ${({ theme }) =>
        theme.palette.primary[800]};

      &::after {
        background-color: ${({ theme }) => theme.palette.primary[100]};
      }
    }
    &--${NotificationVariantTypes.success} {
      --toastify-color-progress-light: ${({ theme }) =>
        theme.palette.green[800]};

      &::after {
        background-color: ${({ theme }) => theme.palette.green[100]};
      }
    }
    &--${NotificationVariantTypes.warning} {
      --toastify-color-progress-light: ${({ theme }) =>
        theme.palette.yellow[800]};

      &::after {
        background-color: ${({ theme }) => theme.palette.yellow[100]};
      }
    }
    &--${NotificationVariantTypes.error} {
      --toastify-color-progress-light: ${({ theme }) => theme.palette.red[800]};

      &::after {
        background-color: ${({ theme }) => theme.palette.red[100]};
      }
    }

    &__body {
      margin: 0;
      padding: 0;
    }

    &__progress {
      top: 0;
      bottom: auto;
      height: 3px;
    }

    &::after {
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 3px;
    }
  }
`;

export const ToastContainer = styled(ExternalToastContainer)`
  min-width: 400px;
  max-width: 400px;
`;
