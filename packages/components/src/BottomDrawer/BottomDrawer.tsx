import { type DrawerProps as MuiDrawerProps } from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';
import { type MouseEvent } from 'react';

import { type WithoutEmotionSpecific } from '../types';
import { IconButton } from '../IconButton';

import { DEFAULT_HEADER_HEIGHT } from './constants';
import { DrawerBody, DrawerHeader, DrawerTitle, StyledDrawer } from './styles';

export type BottomDrawerProps = {
  /**
   * @example <BottomDrawer title="Заголовок">
   * @description Текстовый заголовок в шапке компонента.
   */
  title: string;
  /**
   * @example <BottomDrawer>
   * @default false
   * @description Остаётся ли компонент смонтированным после его скрытия.
   */
  isMountedOnHide?: boolean;
  /**
  /**
   * @example <BottomDrawer drawerHeaderHeight={56}>
   * @default 56
   * @description Высота шапки компонента
   */
  drawerHeaderHeight?: number;
} & WithoutEmotionSpecific<Omit<MuiDrawerProps, 'anchor' | 'variant'>>;

export const BottomDrawer = ({
  title,
  isMountedOnHide = false,
  drawerHeaderHeight = DEFAULT_HEADER_HEIGHT,
  children,
  onClose,
  ...props
}: BottomDrawerProps) => {
  const handleClose = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClose) {
      onClose(event, 'escapeKeyDown');
    }
  };

  return (
    <StyledDrawer
      {...props}
      anchor="bottom"
      ModalProps={{ keepMounted: isMountedOnHide }}
      onClose={onClose}
    >
      <DrawerHeader drawerHeaderHeight={drawerHeaderHeight}>
        <DrawerTitle variant="h5" noWrap>
          {title}
        </DrawerTitle>
        <IconButton variant="text" onClick={handleClose}>
          <CrossOutlineMd />
        </IconButton>
      </DrawerHeader>

      <DrawerBody>{children}</DrawerBody>
    </StyledDrawer>
  );
};
