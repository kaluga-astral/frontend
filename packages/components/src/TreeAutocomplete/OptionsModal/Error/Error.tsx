import { Button } from '../../../Button';
import { Typography } from '../../../Typography';

import { Wrapper } from './styles';

type Props = {
  /**
   * Текст ошибки при загрузке данных
   */
  loadingErrorMsg?: string;

  /**
   * Функция обработки нажатия на кнопку "Повторить запрос"
   */
  onRetry?: () => void;
};

const DEFAULT_ERROR_MSG = 'Не удалось загрузить данные';

export const Error = ({
  loadingErrorMsg = DEFAULT_ERROR_MSG,
  onRetry,
}: Props) => (
  <Wrapper>
    <Typography color="textSecondary">{loadingErrorMsg}</Typography>

    {onRetry && <Button onClick={onRetry}>Попробовать снова</Button>}
  </Wrapper>
);
