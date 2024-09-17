import { type ReactNode } from 'react';

import { Button, type ButtonProps } from '../Button';
import { Dialog, type DialogProps } from '../Dialog';
import { DialogContent } from '../DialogContent';
import { DialogContentText } from '../DialogContentText';
import { DialogActions } from '../DialogActions';

import { CancelButton } from './styles';
import { useLogic } from './useLogic';

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

export const ConfirmDialog = (props: ConfirmDialogProps) => {
  const { isShowCancelButton, cancelButtonProps } = useLogic(props);

  const { open, title, description, actions, onClose, ...restProps } = props;

  const { text: confirmText, ...confirmButtonProps } = actions.confirm;

  const {
    text: cancelText,
    variant,
    ...restCancelProps
  } = actions.cancel || {};

  return (
    <Dialog title={title} open={open} onClose={onClose} {...restProps}>
      {description && (
        <DialogContent>
          <DialogContentText>{description}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        {isShowCancelButton && (
          <CancelButton {...restCancelProps} {...cancelButtonProps}>
            {cancelText}
          </CancelButton>
        )}
        <Button {...confirmButtonProps}>{confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
};
