import { type DrawerProps as MuiDrawerProps } from '@mui/material';

import { SideDialogTitle } from '../SideDialogTitle';
import { type WithoutEmotionSpecific } from '../types';

import { StyledDrawer } from './styles';

type SideDialogSize = 'xs' | 'sm' | 'md' | 'lg';

export type SideDialogProps = WithoutEmotionSpecific<
  Omit<MuiDrawerProps, 'anchor'>
> & {
  title?: string;
  /**
   * Размер SideDialog
   * */
  size?: SideDialogSize;
};

export const SideDialog = ({
  children,
  title,
  onClose,
  open,
  size = 'sm',
  ...props
}: SideDialogProps) => {
  return (
    <StyledDrawer
      $size={size}
      anchor="right"
      open={open}
      onClose={onClose}
      {...props}
    >
      {title && <SideDialogTitle onClose={onClose}>{title}</SideDialogTitle>}
      {children}
    </StyledDrawer>
  );
};
