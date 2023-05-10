import React from 'react';
import { ModalProps } from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';

import { Grid, GridContainerProps } from '../Grid';
import { IconButton } from '../IconButton';
import { Typography } from '../Typography';

import { StyledContainer } from './styles';

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

  const templateColumns = React.useMemo(() => {
    let type = '1fr';

    if (title) {
      type = 'max-content ' + type;
    }

    if (onClose) {
      type += ' 32px';
    }

    return type;
  }, [title, onClose]);

  return (
    <StyledContainer
      container
      templateColumns={templateColumns}
      alignItems="center"
      spacing={2}
    >
      {title && (
        <Typography intensity={500} variant="h4">
          {title}
        </Typography>
      )}
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
    </StyledContainer>
  );
};
