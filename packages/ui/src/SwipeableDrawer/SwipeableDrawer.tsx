import { ReactNode } from 'react';
import { SwipeableDrawerProps as MuiSwipeableDrawerProps } from '@mui/material';

import { WithoutEmotionSpecific } from '../types';

import {
  StyledSwipeableDrawer,
  SwipeableDrawerBody,
  SwipeableDrawerHeader,
  SwipeableDrawerPuller,
  SwipeableDrawerPullerIcon,
  SwipeableDrawerTitle,
} from './styles';

export type SwipeableDrawerProps = {
  /**
   * @example <StyledSwipeableDrawer drawerBleedingTitle="Заголовок">
   * @description Текстовый заголовок в шапке компонента.
   */
  drawerBleedingTitle: string;
  /**
   * @example <StyledSwipeableDrawer>
   * @default false
   * @description Остаётся ли компонент смонтированным после его скрытия.
   */
  isMountedOnHide?: boolean;
  /**
   * @example <StyledSwipeableDrawer>
   * @default undefined
   * @description Иконка в шапке компонента (над заголовком).
   */
  drawerBleedingIcon?: ReactNode;
  /**
   * @example <StyledSwipeableDrawer drawerBleedingIcon={56}>
   * @default 56
   * @description Высота шапки компонента и невидимого перетаскиваемого элемента.
   */
  drawerBleedingHeight?: number;
} & WithoutEmotionSpecific<MuiSwipeableDrawerProps>;

export const SwipeableDrawer = ({
  drawerBleedingTitle,
  isMountedOnHide = false,
  drawerBleedingIcon,
  drawerBleedingHeight = 56,
  children,
  ...props
}: SwipeableDrawerProps) => {
  return (
    <StyledSwipeableDrawer
      {...props}
      swipeAreaWidth={drawerBleedingHeight}
      ModalProps={{ keepMounted: isMountedOnHide }}
    >
      <SwipeableDrawerHeader drawerBleedingHeight={drawerBleedingHeight}>
        <SwipeableDrawerPuller>
          {drawerBleedingIcon || <SwipeableDrawerPullerIcon />}
        </SwipeableDrawerPuller>

        <SwipeableDrawerTitle noWrap>
          {drawerBleedingTitle}
        </SwipeableDrawerTitle>
      </SwipeableDrawerHeader>

      <SwipeableDrawerBody drawerBleedingHeight={drawerBleedingHeight}>
        {children}
      </SwipeableDrawerBody>
    </StyledSwipeableDrawer>
  );
};
