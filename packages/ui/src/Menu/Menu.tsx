import { MenuProps } from './types';
import { StyledMenu } from './styled';

const Menu = ({ children, ...props }: MenuProps) => {
  return <StyledMenu {...props}>{children}</StyledMenu>;
};

export default Menu;
