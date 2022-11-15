import { ReactNode } from 'react';

import { Button, ButtonProps } from '../Button';
import { Dialog } from '../Dialog';
import { DialogContent } from '../DialogContent';
import { DialogContentText } from '../DialogContentText';
import { DialogActions } from '../DialogActions';

type ConfirmDialogProps = {
  /**
   * @description Флаг состояния диалога (открыт-закрыт)
   */
  open: boolean;
  /**
   * @description Заголовок диалога
   */
  title: string;
  /**
   * @description Вспомогательный текст
   */
  description?: ReactNode;
  /**
   * @description Функция для закрытия диалога
   */
  onClose: () => void;
  /**
   * @description Параметры кнопок действий
   */
  actions: {
    /**
     * @description Параметры кнопки подтверждения
     * @example <ConfirmDialog actions={{ confirm: { text: 'Название кнопки' }}}
     */
    confirm: ButtonProps & { text: string };
    /**
     * @description Параметры кнопки отмены. В качестве действия onClick по-умолчанию используется пропс onClose
     * @example <ConfirmDialog actions={{ cancel: { text: 'Название кнопки' }}}
     */
    cancel: ButtonProps & { text: string };
  };
};

export const ConfirmDialog = ({
  open,
  title,
  description,
  actions,
  onClose,
}: ConfirmDialogProps) => {
  const { text: confirmText, ...confirmButtonProps } = actions.confirm;
  const { text: cancelText, ...cancelButtonProps } = actions.cancel;
  const handleCancelClick = cancelButtonProps.onClick || onClose;

  return (
    <Dialog title={title} open={open} onClose={onClose}>
      {description && (
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button {...cancelButtonProps} onClick={handleCancelClick}>
          {cancelText}
        </Button>
        <Button {...confirmButtonProps}>{confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
};
