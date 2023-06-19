import React from 'react';
import { ModalProps } from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';

import { Grid, GridContainerProps } from '../Grid';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';

import { DialogHeaderRoot } from './styles';

export type DialogHeaderProps = {
  children: React.ReactNode;
  justifyContent?: GridContainerProps['justifyContent'];
  title?: string;
  disableSpacing?: boolean;
  onClose?: ModalProps['onClose'];
};

export const DialogHeader = ({
  children,
  justifyContent = 'left',
  title,
  disableSpacing,
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
      <Grid
        container
        justifyContent={justifyContent}
        alignItems="center"
        autoFlow="column"
        spacing={disableSpacing ? 0 : 2}
      >
        {children}
      </Grid>
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
