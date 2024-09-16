import { type ReactNode, useMemo } from 'react';

import { Button, type ButtonProps } from '../Button';
import { Dialog, type DialogProps } from '../Dialog';
import { DialogContent } from '../DialogContent';
import { DialogContentText } from '../DialogContentText';
import { DialogActions } from '../DialogActions';
import { useViewportType } from '../hooks';

import { CancelButton } from './styles';

export type ConfirmDialogProps = {
  /**
   * Заголовок диалога
   */
  title: string;
  /**
   * Вспомогательный текст
   */
  description?: ReactNode;
  /**
   * Функция для закрытия диалога
   */
  onClose: () => void;
  /**
   * Параметры кнопок действий
   */
  actions: {
    /**
     * Параметры кнопки подтверждения
     * @example <ConfirmDialog actions={{ confirm: { text: 'Название кнопки' }}}
     */
    confirm: ButtonProps & { text: string };
    /**
     * Параметры кнопки отмены. В качестве действия onClick по-умолчанию используется пропс onClose
     * @example <ConfirmDialog actions={{ cancel: { text: 'Название кнопки' }}}
     */
    cancel?: ButtonProps & { text: string };
  };
} & Pick<
  DialogProps,
  | 'aria-labelledby'
  | 'aria-describedby'
  | 'disableBackdropClick'
  | 'disablePortal'
  | 'disableScrollLock'
  | 'hideBackdrop'
  | 'keepMounted'
  | 'open'
>;

export const ConfirmDialog = ({
  open,
  title,
  description,
  actions,
  onClose,
  ...restProps
}: ConfirmDialogProps) => {
  const { text: confirmText, ...confirmButtonProps } = actions.confirm;
  const { isMobile } = useViewportType();

  const renderCancelButton = useMemo(() => {
    if (actions.cancel) {
      const {
        text: cancelText,
        variant = isMobile ? 'light' : 'text',
        ...cancelButtonProps
      } = actions.cancel;
      const handleCancelClick = actions.cancel?.onClick || onClose;

      return (
        <CancelButton
          variant={variant}
          {...cancelButtonProps}
          onClick={handleCancelClick}
        >
          {cancelText}
        </CancelButton>
      );
    }

    return null;
  }, [actions.cancel, onClose, isMobile]);

  return (
    <Dialog title={title} open={open} onClose={onClose} {...restProps}>
      {description && (
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        {renderCancelButton}
        <Button {...confirmButtonProps}>{confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
};
