import { useEffect, useState } from 'react';

import { Button } from '../../Button';
import { Typography } from '../../Typography';
import { useSecondsCountDown } from '../../hooks';

import { Wrapper } from './styles';

type ResendCodeButtonProps = {
  /**
   * Если true, показываются символы, редактирование запрещено
   */
  disabled: boolean;
  /**
   * Если true, показывается анимация загрузки
   */
  loading: boolean;
  /**
   * Флаг состояния ошибки
   */
  isError: boolean;
  /**
   * Время, после которого разрешен перезапрос кода (в сек)
   */
  resendTimeout: number;
  /**
   * Метод вызываемый при перезапросе кода по кнопке
   */
  onResendCode?: () => Promise<void>;
  /**
   * Метод очищающий поле
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
    isActive,
    textTime: time,
    resetTimer,
  } = useSecondsCountDown({
    seconds: resendTimeout,
  });

  const [resendCodeLoading, setResendCodeLoading] = useState(false);

  const isTimerActive = isActive && time !== '00:00';
  const showTimer =
    !disabled && !loading && !resendCodeLoading && isTimerActive;
  const disableButton =
    disabled || loading || resendCodeLoading || isTimerActive;

  useEffect(() => {
    resetTimer(resendTimeout);
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
