import { Button } from '../../Button';
import { Typography } from '../../Typography';

import { ERROR_MESSAGE } from './constants';
import { Wrapper } from './styles';

type Props = {
  onRetry: () => void;
};

export const Error = ({ onRetry }: Props) => (
  <Wrapper>
    <Typography align="center">{ERROR_MESSAGE}</Typography>

    <Button onClick={onRetry}>Попробовать снова</Button>
  </Wrapper>
);
