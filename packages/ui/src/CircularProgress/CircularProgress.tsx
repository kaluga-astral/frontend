import { StyledCircularProgress } from './styled';
import { СircularProgressProps } from './types';

export const CircularProgress = ({ color, size, ...props }: СircularProgressProps) => {
  return (
    <StyledCircularProgress {...props} customSize={size} customColor={color} />
  );
};

export default CircularProgress;
