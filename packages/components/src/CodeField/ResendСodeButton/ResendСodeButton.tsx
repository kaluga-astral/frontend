import { useEffect, useState } from 'react';

import { useTimer } from '../../hooks';
import { Button } from '../../Button';
import { formatSecondsToTime } from '../../utils/date';
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
  time: number;
  /**
   * @description Фукция, которая вызовется при перезапросе кода по кнопке
   */
  onResendCode: () => Promise<void>;
};

const ResendCodeButton = ({
  loading,
  disabled,
  time,
  onResendCode,
  isError,
}: ResendCodeButtonProps) => {
  const [timer, restartTimer] = useTimer(0);
  const [resendCodeLoading, setResendCodeLoading] = useState(false);

  const showTimer = !disabled && !loading && !resendCodeLoading && timer > 0;
  const disableButton = disabled || loading || resendCodeLoading || timer > 0;

  const onClick = () => {
    setResendCodeLoading(true);

    onResendCode()
      .then(() => {
        restartTimer();
      })
      .finally(() => setResendCodeLoading(false));
  };

  useEffect(() => {
    restartTimer(time);
  }, []);

  return (
    <ResendCodeButtonWrapper isError={isError}>
      <Button variant="link" disabled={disableButton} onClick={onClick}>
        Отправить код повторно
      </Button>
      {showTimer && (
        <Typography color="grey" colorIntensity="700">
          {formatSecondsToTime(timer)}
        </Typography>
      )}
    </ResendCodeButtonWrapper>
  );
};

export default ResendCodeButton;
