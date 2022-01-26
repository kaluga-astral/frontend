import { StyledCircularProgress } from './styled';
import { LoaderProps } from './types';

export const CircularProgress = ({ color, size, ...props }: LoaderProps) => {
  return (
    <StyledCircularProgress {...props} customSize={size} customColor={color} />
  );
};

export default CircularProgress;
