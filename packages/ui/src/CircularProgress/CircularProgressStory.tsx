import { CircularProgress, CircularProgressProps } from '../CircularProgress';

export type CircularProgressStoryProps = CircularProgressProps;

export const CircularProgressStory = (props: CircularProgressStoryProps) => {
  const { size, color } = props;

  return <CircularProgress size={size} color={color} />;
};

export default CircularProgressStory;
