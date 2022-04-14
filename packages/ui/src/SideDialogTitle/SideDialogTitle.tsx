import { DialogTitle as MuiDialogTitle } from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';
import { useCallback } from 'react';

import { IconButton } from '../IconButton';

import { DialogTitleProps } from './types';

export const SideDialogTitle = ({
  children,
  onClose,
  ...props
}: DialogTitleProps) => {
  const onClickTitle = useCallback(
    (e) => onClose && onClose(e, 'escapeKeyDown'),
    [onClose]
  );

  return (
    <MuiDialogTitle {...props}>
      {children}
      {onClose && (
        <IconButton variant="text" onClick={onClickTitle}>
          <CrossOutlineMd />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};
