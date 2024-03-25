import { Rating, type RatingProps } from '../../Rating';

import {
  AngryEmojiIcon,
  FrowningEmojiIcon,
  HappyEmojiIcon,
  HeartingEmojiIcon,
  NeutralEmojiIcon,
} from './icons';

type Props = RatingProps;

export const EmojiRating = (props: Props) => (
  <Rating
    {...props}
    highlightSelectedOnly
    icons={[
      <AngryEmojiIcon />,
      <FrowningEmojiIcon />,
      <NeutralEmojiIcon />,
      <HappyEmojiIcon />,
      <HeartingEmojiIcon />,
    ]}
  />
);
