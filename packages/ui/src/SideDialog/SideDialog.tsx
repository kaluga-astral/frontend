import { SideDialogTitle } from '../SideDialogTitle';

import { StyledDrawer } from './styled';
import { SideDialogProps } from './types';

export const SideDialog = ({
  children,
  title,
  onClose,
  open,
  ...props
}: SideDialogProps) => {
  return (
    <StyledDrawer anchor="right" open={open} onClose={onClose} {...props}>
      <SideDialogTitle onClose={onClose}>{title}</SideDialogTitle>
      {children}
    </StyledDrawer>
  );
};
