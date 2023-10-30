import { useEffect } from 'react';

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
   * @description Фукция, которая вызовется при перезапросе
   */
  onRestart: () => void;
};

const ResendCodeButton = ({
  loading,
  disabled,
  time,
  onRestart,
  isError,
}: ResendCodeButtonProps) => {
  const [timer, restartTimer] = useTimer(0);
  const showTimer = !disabled && !loading && timer > 0;

  const onClick = () => {
    onRestart();
    restartTimer(time);
  };

  useEffect(() => {
    restartTimer(time);
  }, []);

  return (
    <ResendCodeButtonWrapper isError={isError}>
      <Button
        variant="link"
        disabled={disabled || loading || timer > 0}
        onClick={onClick}
      >
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
