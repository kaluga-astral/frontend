import { useState } from 'react';
import useCountdown from '@bradgarropy/use-countdown';

import { Button } from '../../Button';
import { Typography } from '../../Typography';

import { ResendCodeButtonWrapper } from './styles';

type ResendCodeButtonProps = {
  /**
   * @description Если true, показываются символы, редактирование запрещено
   */
  disabled: boolean;
  /**
   * @description Если true, показывается анимация загрузки
   */
  loading: boolean;
  /**
   * @description Флаг состояния ошибки
   */
  isError: boolean;
  /**
   * @description Время, после которого разрешен перезапрос кода (в сек)
   */
  resendTimeout: number;
  /**
   * @description Фукция, которая вызовется при перезапросе кода по кнопке
   */
  onResendCode?: () => Promise<void>;
};

const ResendCodeButton = ({
  loading,
  disabled,
  resendTimeout,
  onResendCode,
  isError,
}: ResendCodeButtonProps) => {
  const {
    formatted: time,
    reset,
    isActive,
  } = useCountdown({
    seconds: resendTimeout,
    autoStart: true,
  });

  const [resendCodeLoading, setResendCodeLoading] = useState(false);

  const isTimerActive = isActive && time !== '00:00';
  const showTimer =
    !disabled && !loading && !resendCodeLoading && isTimerActive;
  const disableButton =
    disabled || loading || resendCodeLoading || isTimerActive;

  const onClick = () => {
    setResendCodeLoading(true);

    if (onResendCode) {
      onResendCode()
        .then(() => {
          reset({ minutes: 0, seconds: resendTimeout });
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => setResendCodeLoading(false));
    }
  };

  return (
    <ResendCodeButtonWrapper isError={isError}>
      <Button variant="link" disabled={disableButton} onClick={onClick}>
        Отправить код повторно
      </Button>
      {showTimer && (
        <Typography color="grey" colorIntensity="700">
          {time}
        </Typography>
      )}
    </ResendCodeButtonWrapper>
  );
};

export default ResendCodeButton;
