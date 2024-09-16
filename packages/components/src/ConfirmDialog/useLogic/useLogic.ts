import { useViewportType } from '../../hooks';
import { type ConfirmDialogProps } from '../ConfirmDialog';

type UseLogicParams = ConfirmDialogProps;

export const useLogic = ({ actions, onClose }: UseLogicParams) => {
  const { isMobile } = useViewportType();
  const { cancel } = actions;

  const isShowCancelButton = Boolean(cancel);

  const cancelVariant = isMobile ? 'light' : 'text';
  const handleCancelClick = cancel?.onClick || onClose;

  const { text, variant = cancelVariant, ...restProps } = actions?.cancel || {};

  const cancelButtonProps = {
    children: text,
    variant,
    onClick: handleCancelClick,
    ...restProps,
  };

  return { isShowCancelButton, cancelButtonProps };
};
