import { Button } from '../../../Button';
import { Typography } from '../../../Typography';

import { Wrapper } from './styles';

type Props = {
  onRetry?: () => void;
};

export const Error = ({ onRetry }: Props) => (
  <Wrapper>
    <Typography color="textSecondary">Не удалось загрузить данные</Typography>

    {onRetry && <Button onClick={onRetry}>Попробовать снова</Button>}
  </Wrapper>
);
