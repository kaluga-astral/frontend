import React, { CSSProperties } from 'react';
import { ModalProps } from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';

import { IconButton } from '../IconButton';
import { Typography } from '../Typography';

import { DialogHeaderContent, DialogHeaderRoot } from './styles';

export type DialogHeaderProps = {
  /**
   * @description Горизонтальное выравнивание
   * */
  justifyContent?: CSSProperties['justifyContent'];
  /**
   * @description Расстояние между элементами, обернутыми в DialogHeader
   * */
  spacing?: number;
  /**
   * @description Заголовок
   */
  title?: string;
  /**
   * @description Кнопка для закрытия модального окна
   */
  onClose?: ModalProps['onClose'];
  children: React.ReactNode;
};

export const DialogHeader = ({
  children,
  title,
  justifyContent = 'flex-start',
  spacing = 2,
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
      <DialogHeaderContent
        justifyContent={justifyContent}
        columnSpacing={spacing}
      >
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
