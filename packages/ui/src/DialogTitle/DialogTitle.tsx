import { DialogTitle as MuiDialogTitle } from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';
import { useCallback } from 'react';

import { IconButton } from '../IconButton';

import { DialogTitleProps } from './types';

export const DialogTitle = ({
  children,
  onClose,
  ...props
}: DialogTitleProps) => {
  // 'escapeKeyDown'  в документашке написано что это опциональный тип, и можно стрингу любую туда закидывать, а по факту либо escapeKeyDown либо backdropClick

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
