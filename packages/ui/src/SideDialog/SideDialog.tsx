import { DialogTitle } from '../index';

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
      <DialogTitle onClose={onClose}>{title}</DialogTitle>
      {children}
    </StyledDrawer>
  );
};
