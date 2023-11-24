import React from 'react';
import { ModalProps } from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';

import { IconButton } from '../IconButton';
import { Typography } from '../Typography';

import {
  DialogHeaderContent,
  DialogHeaderContentProps,
  DialogHeaderRoot,
} from './styles';

export type DialogHeaderProps = DialogHeaderContentProps & {
  children: React.ReactNode;
  /**
   * @description Заголовок
   * @default undefined
   * @type string
   */
  title?: string;
  /**
   * @description Кнопка для закрытия модального окна
   * @default undefined
   * @type function
   */
  onClose?: ModalProps['onClose'];
};

export const DialogHeader = ({
  children,
  title,
  justifyContent,
  spacing,
  onClose,
}: DialogHeaderProps) => {
  const handleTitleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (onClose) {
      onClose(e, 'escapeKeyDown');
    }
  };

  return (
    <DialogHeaderRoot hasTitle={Boolean(title)} hasOnClose={Boolean(onClose)}>
      {title && <Typography variant="h4">{title}</Typography>}
      <DialogHeaderContent justifyContent={justifyContent} spacing={spacing}>
        {children}
      </DialogHeaderContent>
      {onClose && (
        <IconButton
          variant="text"
          onClick={handleTitleClick}
          aria-label="Закрыть модальное окно"
        >
          <CrossOutlineMd />
        </IconButton>
      )}
    </DialogHeaderRoot>
  );
};
