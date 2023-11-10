import type {
  ModalProps,
  DialogTitleProps as MuiDialogTitleProps,
} from '@mui/material';
import { DialogTitle as MuiDialogTitle } from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';
import type { MouseEvent } from 'react';

import { IconButton } from '../IconButton';
import type { WithoutEmotionSpecific } from '../types';

export type DialogTitleProps = WithoutEmotionSpecific<MuiDialogTitleProps> & {
  onClose?: ModalProps['onClose'];
};

export const DialogTitle = ({
  children,
  onClose,
  ...props
}: DialogTitleProps) => {
  // 'escapeKeyDown'  в документашке написано что это опциональный тип, и можно стрингу любую туда закидывать, а по факту либо escapeKeyDown либо backdropClick

  const handleTitleClick = (e: MouseEvent<HTMLButtonElement>) => {
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
          onClick={handleTitleClick}
          aria-label="Закрыть модальное окно"
        >
          <CrossOutlineMd />
        </IconButton>
      )}
    </MuiDialogTitle>
  );
};
