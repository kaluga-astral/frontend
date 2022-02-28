import { StyledListItemButton } from './styled';
import { ListItemButtonProps } from './types';

export const ListItemButton = ({ children, ...props }: ListItemButtonProps) => {
  return (
    <StyledListItemButton disableRipple {...props}>
      {children}
    </StyledListItemButton>
  );
};
