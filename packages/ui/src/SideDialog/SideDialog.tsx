import { DialogTitle } from '../index';

import { StyledDrawer } from './styled';

export const SideDialog = ({
  children,
  title,
  onClose,
  open,
  ...props
}: any) => {
  return (
    <StyledDrawer anchor={'right'} open={open} onClose={onClose} {...props}>
      <DialogTitle onClose={onClose}>{title}</DialogTitle>
      {children}
    </StyledDrawer>
  );
};
