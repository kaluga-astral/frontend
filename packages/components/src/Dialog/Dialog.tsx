import { type DialogProps as MuiDialogProps } from '@mui/material';

import { DialogTitle } from '../DialogTitle';
import { type WithoutEmotionSpecific } from '../types';
import { BottomDrawer } from '../BottomDrawer';
import { useViewportType } from '../hooks/useViewportType';

import { StyledDialog } from './styles';

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
};

export const Dialog = ({
  children,
  title,
  disableBackdropClick,
  onClose,
  ...props
}: DialogProps) => {
  const handleClose =
    onClose &&
    ((
      event: React.MouseEvent<HTMLButtonElement>,
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
    <StyledDialog onClose={handleClose} {...props}>
      {title && <DialogTitle onClose={onClose}>{title}</DialogTitle>}
      {children}
    </StyledDialog>
  );
};
