import { type DrawerProps as MuiDrawerProps } from '@mui/material';

import { SideDialogTitle } from '../SideDialogTitle';
import { type WithoutEmotionSpecific } from '../types';

import { StyledDrawer } from './styles';

export type SideDialogProps = WithoutEmotionSpecific<MuiDrawerProps> & {
  title?: string;
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
      {title && <SideDialogTitle onClose={onClose}>{title}</SideDialogTitle>}
      {children}
    </StyledDrawer>
  );
};
