import { DrawerProps as MuiDrawerProps } from '@mui/material';

import { SideDialogTitle } from '../SideDialogTitle';
import { WithoutEmotionSpecific } from '../types';

import { StyledDrawer } from './styles';

export type SideDialogProps = WithoutEmotionSpecific<MuiDrawerProps> & {
  title: string;
};

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
