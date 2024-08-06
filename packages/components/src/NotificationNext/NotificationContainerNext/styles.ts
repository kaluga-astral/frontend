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
export const Wrapper = styled.div``;

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
