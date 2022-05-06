import { StyledMenuItem } from './styled';
import { MenuItemProps } from './types';

export const MenuItem = ({ children, ...props }: MenuItemProps) => {
  return <StyledMenuItem {...props}>{children}</StyledMenuItem>;
};
