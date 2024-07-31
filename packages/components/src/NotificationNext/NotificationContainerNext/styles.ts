import { ToastContainer } from 'react-toastify-next';

import { keyframes, styled } from '../../styles';
import {
  NOTIFY_ANIMATION_IN_CLASSNAME,
  NOTIFY_ANIMATION_OUT_CLASSNAME,
  NOTIFY_CLASSNAME,
  NotificationVariantTypes,
} from '../constants';

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

const leaveInMobile = keyframes`
  from {
    transform: translateY(-100%);
  }
  to {
    transform: translateY(0px);
  }
`;

// используем дополнительный враппер,
// потому что styled для ToastContainer не умеет работать с theme внутри
// использовать бэм классы для стилизации пришлось,
// потому что react-toastify не предоставляет,
// достаточно контейнеров для стилизации через styled,
// к примеру добраться до прогресс бара можно только через цсс классы
export const Wrapper = styled.div`
  .${NOTIFY_ANIMATION_IN_CLASSNAME} {
    animation: ${leaveIn} ease-in-out 0.34s;
    animation-fill-mode: both;

    ${({ theme }) => theme.breakpoints.down('sm')} {
      animation: ${leaveInMobile} ease-in-out 0.34s;
      animation-fill-mode: both;
    }
  }

  .${NOTIFY_ANIMATION_OUT_CLASSNAME} {
    animation: ${leaveOut} ease-in-out 0.34s;
    animation-fill-mode: both;
  }

  .${NOTIFY_CLASSNAME} {
    padding: 0;

    box-shadow: ${({ theme }) => theme.elevation[300]};

    &::after {
      content: '';

      position: absolute;
      top: 0;
      left: 0;

      display: block;

      width: 100%;
      height: 3px;
    }

    ${({ theme }) => theme.breakpoints.down('sm')} {
      margin-bottom: ${({ theme }) => theme.spacing(3)};
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

    &__progress {
      top: 0;
      bottom: auto;

      height: 3px;
    }
  }
`;

export const Inner = styled(ToastContainer)`
  min-width: 400px;
  max-width: 400px;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 100%;
    min-width: unset;
    max-width: unset;
    padding: ${({ theme }) => theme.spacing(2, 4, 0, 4)};
  }
`;
