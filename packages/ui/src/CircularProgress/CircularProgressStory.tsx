import { FC } from 'react';

import { CircularProgress, CircularProgressProps } from '../CircularProgress';

export type CircularProgressStoryProps = CircularProgressProps;

export const CircularProgressStory: FC<CircularProgressStoryProps> = (
  props
) => {
  const { size, color } = props;

  return <CircularProgress size={size} color={color} />;
};

export default CircularProgressStory;
