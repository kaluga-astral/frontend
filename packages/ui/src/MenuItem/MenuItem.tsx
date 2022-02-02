import { MenuItemProps } from './types';
import { StyledMenuItem } from './styled';

export const MenuItem = ({ children, ...props }: MenuItemProps) => {
  return <StyledMenuItem {...props}>{children}</StyledMenuItem>;
};
