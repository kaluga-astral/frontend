import { ReactNode, useMemo } from 'react';

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
    cancel?: ButtonProps & { text: string };
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

  const renderCancelButton = useMemo(() => {
    if (actions.cancel) {
      const { text: cancelText, ...cancelButtonProps } = actions.cancel;
      const handleCancelClick = actions.cancel?.onClick || onClose;

      return (
        <Button {...cancelButtonProps} onClick={handleCancelClick}>
          {cancelText}
        </Button>
      );
    }

    return null;
  }, [actions.cancel, onClose]);

  return (
    <Dialog title={title} open={open} onClose={onClose}>
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
