import { type MenuListProps } from './types';
import { StyledMenuList } from './styles';

export const MenuList = ({ children, ...props }: MenuListProps) => {
  return <StyledMenuList {...props}>{children}</StyledMenuList>;
};
