import { Typography } from '../../Typography';

import { END_OF_SCROLL_MESSAGE } from './constants';
import { DataListNoDataRoot } from './styles';

type Props = {
  endOfScrollMsg?: string;
};

export const DataListEndDate = ({ endOfScrollMsg }: Props) => (
  <DataListNoDataRoot>
    <Typography>{endOfScrollMsg || END_OF_SCROLL_MESSAGE}</Typography>
  </DataListNoDataRoot>
);
