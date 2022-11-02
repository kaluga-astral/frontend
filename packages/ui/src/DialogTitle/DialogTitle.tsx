import {
  ModalProps,
  DialogTitleProps as MuiDialogTitleProps,
} from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';
import { MouseEvent } from 'react';

import { IconButton } from '../IconButton';
import { WithoutEmotionSpecific } from '../types';

import { DialogTitleStyled } from './styles';

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
    <DialogTitleStyled {...props}>
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
    </DialogTitleStyled>
  );
};
