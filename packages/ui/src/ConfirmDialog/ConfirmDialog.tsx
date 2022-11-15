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
  description: string;
  /**
   * @description Параметры кнопок действий
   */
  actions: {
    confirm: ButtonProps & { text: string };
    cancel: ButtonProps & {
      text: string;
      onClick: ButtonProps['onClick'];
    };
  };
};

export const ConfirmDialog = ({
  open,
  title,
  description,
  actions,
}: ConfirmDialogProps) => {
  const { text: confirmText, ...confirmButtonProps } = actions.confirm;
  const { text: cancelText, ...cancelButtonProps } = actions.cancel;

  return (
    <Dialog title={title} open={open} onClose={actions.cancel.onClick}>
      <DialogContent>
        <DialogContentText>{description}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button {...cancelButtonProps}>{cancelText}</Button>
        <Button {...confirmButtonProps}>{confirmText}</Button>
      </DialogActions>
    </Dialog>
  );
};
