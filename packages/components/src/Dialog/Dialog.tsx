import { type DialogProps as MuiDialogProps } from '@mui/material';
import { type MouseEvent } from 'react';

import { DialogTitle } from '../DialogTitle';
import type { WithoutEmotionSpecific } from '../types';
import { BottomDrawer } from '../BottomDrawer';
import { useViewportType } from '../hooks';

import { StyledDialog } from './styles';

type DialogSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type DialogProps = WithoutEmotionSpecific<
  Omit<MuiDialogProps, 'title'>
> & {
  /**
   * Заголовок
   */
  title?: JSX.Element | JSX.Element[] | string;
  /**
   * Отключить кликабельность фонового компонента
   */
  disableBackdropClick?: boolean;
  /**
   * Размер Dialog
   * @default md
   */
  size?: DialogSize;
};

export const Dialog = ({
  children,
  title,
  disableBackdropClick,
  onClose,
  size = 'md',
  ...props
}: DialogProps) => {
  const handleClose =
    onClose &&
    ((
      event: MouseEvent<HTMLButtonElement>,
      reason: 'backdropClick' | 'escapeKeyDown',
    ) => {
      if (disableBackdropClick && reason == 'backdropClick') {
        return;
      }

      onClose(event, reason);
    });

  const { isMobile } = useViewportType();

  if (isMobile) {
    return (
      <BottomDrawer onClose={handleClose} title={title} {...props}>
        {children}
      </BottomDrawer>
    );
  }

  return (
    <StyledDialog $size={size} onClose={handleClose} {...props}>
      {title && <DialogTitle onClose={onClose}>{title}</DialogTitle>}
      {children}
    </StyledDialog>
  );
};
