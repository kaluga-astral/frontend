import { Rating, type RatingProps } from '../../Rating';

import { EMOJIS } from './constants';

type Props = RatingProps;

export const EmojiRating = (props: Props) => {
  const renderEmoji = (code: string) => (
    <span dangerouslySetInnerHTML={{ __html: code }} />
  );

  const icons = EMOJIS.map(renderEmoji);

  return <Rating {...props} highlightSelectedOnly icons={icons} />;
};
