import { MenuListProps } from './types';
import { StyledMenuList } from './styled';

const MenuList = ({ children, ...props }: MenuListProps) => {
  return <StyledMenuList {...props}>{children}</StyledMenuList>;
};

export default MenuList;
