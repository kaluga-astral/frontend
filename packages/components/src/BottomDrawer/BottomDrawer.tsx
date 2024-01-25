import { type DrawerProps as MuiDrawerProps } from '@mui/material';
import { CrossOutlineMd } from '@astral/icons';
import { type MouseEvent } from 'react';

import { type WithoutEmotionSpecific } from '../types';
import { IconButton } from '../IconButton';

import { DEFAULT_HEADER_HEIGHT } from './constants';
import { DrawerBody, DrawerHeader, DrawerTitle, StyledDrawer } from './styles';

export type BottomDrawerProps = {
  /**
   * Текстовый заголовок в шапке компонента.
   */
  title: string;
  /**
   * Остаётся ли компонент смонтированным после его скрытия.
   * @default false
   */
  isMountedOnHide?: boolean;
  /**
  /**
   * Высота шапки компонента
   * * @default 56
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
