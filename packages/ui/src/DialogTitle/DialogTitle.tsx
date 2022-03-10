import { DialogTitle as MuiDialogTitle } from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';

import { IconButton } from '../IconButton';

import { DialogTitleProps } from './types';

export const DialogTitle = ({
  children,
  onClose,
  showCloseButton,
  ...props
}: DialogTitleProps) => {
  return (
    <MuiDialogTitle {...props}>
      {children}
      {showCloseButton ? (
        <IconButton variant="text" onClick={onClose}>
          <CrossOutlineMd />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
};
