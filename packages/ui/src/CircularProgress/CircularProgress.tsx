import { StyledCircularProgress } from './styled';
import { CircularProgressProps } from './types';

export const CircularProgress = ({
  color,
  size,
  ...props
}: CircularProgressProps) => {
  return (
    <StyledCircularProgress {...props} customSize={size} customColor={color} />
  );
};

export default CircularProgress;
