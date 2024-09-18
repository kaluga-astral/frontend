import { usePopover } from '../../hooks';
import { ButtonColors, ButtonVariants } from '../../Button';
import { type ConfirmActionProps } from '../ConfirmAction';

type UseLogicParams = ConfirmActionProps;

export const useLogic = ({
  confirmButtonProps: externalConfirmButtonProps,
  onConfirm,
}: UseLogicParams) => {
  const { isOpen, anchor, actions } = usePopover();

  const { isAccented } = externalConfirmButtonProps || {};

  const confirmButtonVariant = isAccented
    ? ButtonVariants.Light
    : ButtonVariants.Contained;

  const confirmButtonColor = isAccented
    ? ButtonColors.Error
    : ButtonColors.Primary;

  const handleConfirm = () => {
    onConfirm();
    actions.close();
  };

  return {
    actionComponentProps: {
      onClick: actions.open,
    },
    popoverProps: {
      open: isOpen,
      anchorEl: anchor,
      onClose: actions.close,
    },
    cancelButtonProps: {
      onClick: actions.close,
    },
    confirmButtonProps: {
      variant: confirmButtonVariant,
      color: confirmButtonColor,
      onClick: handleConfirm,
    },
  };
};
