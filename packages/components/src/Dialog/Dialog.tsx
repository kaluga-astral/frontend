import {
  Dialog as MuiDialog,
  type DialogProps as MuiDialogProps,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { DialogTitle } from '../DialogTitle';
import { type WithoutEmotionSpecific } from '../types';
import { BottomDrawer } from '../BottomDrawer';

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

  // TODO: заменить на useViewportType

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  if (isMobile) {
    return (
      <BottomDrawer onClose={handleClose} title={title} {...props}>
        {children}
      </BottomDrawer>
    );
  }

  return (
    <MuiDialog onClose={handleClose} {...props}>
      {title && <DialogTitle onClose={onClose}>{title}</DialogTitle>}
      {children}
    </MuiDialog>
  );
};
