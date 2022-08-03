import {
  ModalProps,
  DialogTitle as MuiDialogTitle,
  DialogTitleProps as MuiDialogTitleProps,
} from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';
import { MouseEvent } from 'react';

import { IconButton } from '../IconButton';

export type DialogTitleProps = MuiDialogTitleProps & {
  onClose?: ModalProps['onClose'];
};

export const DialogTitle = ({
  children,
  onClose,
  ...props
}: DialogTitleProps) => {
  // 'escapeKeyDown'  в документашке написано что это опциональный тип, и можно стрингу любую туда закидывать, а по факту либо escapeKeyDown либо backdropClick

  const handleClickTitle = (e: MouseEvent<HTMLButtonElement>) => {
    if (onClose) {
      onClose(e, 'escapeKeyDown');
    }
  };

  return (
    <MuiDialogTitle {...props}>
      {children}
      {onClose && (
        <IconButton
          variant="text"
          onClick={handleClickTitle}
          aria-label="Закрыть модальное окно"
        >
          <CrossOutlineMd />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};
