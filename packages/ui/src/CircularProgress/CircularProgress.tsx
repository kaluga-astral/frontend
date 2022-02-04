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
      size={size === 'small' ? 16 : 24}
      customColor={color}
    />
  );
};

export default CircularProgress;
