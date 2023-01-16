import { ToastContainer } from 'react-toastify';

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

    &__progress {
      top: 0;
      bottom: auto;

      height: 3px;
    }

    &::after {
      position: absolute;
      top: 0;
      left: 0;

      display: block;
      width: 100%;
      height: 3px;

      content: '';
    }
  }
`;

export const NotificationContainerInner = styled(ToastContainer)`
  min-width: 400px;
  max-width: 400px;
`;
