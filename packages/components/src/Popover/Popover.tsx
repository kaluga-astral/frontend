import {
  Popover as MuiPopover,
  type PopoverProps as MuiPopoverProps,
} from '@mui/material';

import { useViewportType } from '../hooks/useViewportType';
import { BottomDrawer } from '../BottomDrawer';
import { type WithoutEmotionSpecific } from '../types';

export type PopoverProps = WithoutEmotionSpecific<MuiPopoverProps> & {
  /**
   * Заголовок для отображения в мобильной версии
   */
  title?: string;
};

export const Popover = ({
  children,
  onClose,
  open,
  title,
  ...restProps
}: PopoverProps) => {
  const { isMobile } = useViewportType();

  if (isMobile) {
    return (
      <BottomDrawer title={title} onClose={onClose} open={open}>
        {children}
      </BottomDrawer>
    );
  }

  return (
    <MuiPopover open={open} onClose={onClose} {...restProps}>
      {children}
    </MuiPopover>
  );
};
