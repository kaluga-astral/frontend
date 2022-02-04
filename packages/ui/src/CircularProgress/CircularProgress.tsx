import { CircularProgressSizes } from './constants';
import { StyledCircularProgress } from './styled';
import { CircularProgressProps } from './types';

export const CircularProgress = ({
  color,
  size,
  ...props
}: CircularProgressProps) => {
  return (
    <StyledCircularProgress
      {...props}
      size={size === CircularProgressSizes.SMALL ? 16 : 24}
      customColor={color}
    />
  );
};

export default CircularProgress;
