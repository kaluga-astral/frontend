import { MenuListProps } from './types';
import { StyledMenuList } from './styled';

export const MenuList = ({ children, ...props }: MenuListProps) => {
  return <StyledMenuList {...props}>{children}</StyledMenuList>;
};
