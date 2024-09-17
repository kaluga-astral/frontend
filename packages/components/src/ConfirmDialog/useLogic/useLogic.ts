import { useViewportType } from '../../hooks';
import { type ConfirmDialogProps } from '../ConfirmDialog';

type UseLogicParams = ConfirmDialogProps;

export const useLogic = ({ actions, onClose }: UseLogicParams) => {
  const { isMobile } = useViewportType();
  const { cancel } = actions;

  const isShowCancelButton = Boolean(cancel);

  const cancelVariant = isMobile ? 'light' : 'text';
  const handleCancelClick = cancel?.onClick || onClose;

  const { variant = cancelVariant, ...restProps } = actions?.cancel || {};

  const cancelButtonProps = {
    variant,
    onClick: handleCancelClick,
    ...restProps,
  };

  return { isShowCancelButton, cancelButtonProps };
};
