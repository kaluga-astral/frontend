import type { DialogProps as MuiDialogProps } from '@mui/material';
import { Dialog as MuiDialog } from '@mui/material';

import { DialogTitle } from '../DialogTitle';
import type { WithoutEmotionSpecific } from '../types';

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

  return (
    <MuiDialog onClose={handleClose} {...props}>
      {title && <DialogTitle onClose={onClose}>{title}</DialogTitle>}
      {children}
    </MuiDialog>
  );
};
