import { useEffect, useState } from 'react';
import useCountdown from '@bradgarropy/use-countdown';

import { Button } from '../../Button';
import { Typography } from '../../Typography';

import { Wrapper } from './styles';

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
   * @description Функция, которая вызовется при перезапросе кода по кнопке
   */
  onResendCode?: () => Promise<void>;
  /**
   * @description Функция, очищающая поле
   */
  clearCodeValue: () => void;
};

const ResendCodeButton = ({
  loading,
  disabled,
  resendTimeout,
  onResendCode,
  isError,
  clearCodeValue,
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

  useEffect(() => {
    reset({ minutes: 0, seconds: resendTimeout });
  }, [resendTimeout]);

  const onClick = () => {
    setResendCodeLoading(true);

    if (onResendCode) {
      onResendCode()
        .then(() => {
          clearCodeValue();
        })
        .catch((error) => {
          console.error(error);
        })
        .finally(() => setResendCodeLoading(false));
    }
  };

  return (
    <Wrapper isError={isError}>
      <Button variant="link" disabled={disableButton} onClick={onClick}>
        Отправить код повторно
      </Button>
      {showTimer && (
        <Typography color="grey" colorIntensity="700">
          {time}
        </Typography>
      )}
    </Wrapper>
  );
};

export default ResendCodeButton;
