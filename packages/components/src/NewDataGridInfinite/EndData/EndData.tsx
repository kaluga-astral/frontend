import { Typography } from '../../Typography';
import { END_OF_SCROLL_MESSAGE } from '../constants';

type Props = {
  endOfScrollMsg?: string;
};

export const EndData = ({ endOfScrollMsg = END_OF_SCROLL_MESSAGE }: Props) => (
  <Typography>{endOfScrollMsg}</Typography>
);
