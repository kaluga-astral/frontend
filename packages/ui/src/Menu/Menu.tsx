import { MenuProps } from './types';
import { StyledMenu } from './styled';

export const Menu = ({ children, ...props }: MenuProps) => {
  return <StyledMenu {...props}>{children}</StyledMenu>;
};
