import { Typography } from '../../Typography';
import { END_OF_SCROLL_MESSAGE } from '../constants';

import { Item } from './styles';

type Props = {
  endOfScrollMsg?: string;
};

export const EndData = ({ endOfScrollMsg = END_OF_SCROLL_MESSAGE }: Props) => (
  <Item>
    <Typography>{endOfScrollMsg}</Typography>
  </Item>
);
