import { Button } from '../../Button';
import { Typography } from '../../Typography';

import { ERROR_MESSAGE } from './constants';
import { DataListErrorRoot } from './styles';

type Props = {
  onRetry: () => void;
};

export const DataListError = ({ onRetry }: Props) => (
  <DataListErrorRoot>
    <Typography align="center">{ERROR_MESSAGE}</Typography>

    <Button onClick={onRetry}>Попробовать снова</Button>
  </DataListErrorRoot>
);
