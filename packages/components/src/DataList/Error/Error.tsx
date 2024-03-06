import { Button } from '../../Button';
import { Typography } from '../../Typography';

import { ERROR_MESSAGE } from './constants';
import { Item } from './styles';

type Props = {
  onRetry: () => void;
};

export const Error = ({ onRetry }: Props) => (
  <Item>
    <Typography align="center">{ERROR_MESSAGE}</Typography>

    <Button onClick={onRetry}>Попробовать снова</Button>
  </Item>
);
