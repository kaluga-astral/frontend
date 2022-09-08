import { ReactNode } from 'react';
import { SwipeableDrawerProps as MuiSwipeableDrawerProps } from '@mui/material';

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
} & MuiSwipeableDrawerProps;

export const SwipeableDrawer = ({
  drawerBleedingTitle,
  drawerBleedingIcon,
  drawerBleedingHeight = 56,
  children,
  ...props
}: SwipeableDrawerProps) => {
  return (
    <StyledSwipeableDrawer {...props} swipeAreaWidth={drawerBleedingHeight}>
      <SwipeableDrawerHeader drawerBleedingHeight={drawerBleedingHeight}>
        <SwipeableDrawerPuller>
          {drawerBleedingIcon || <SwipeableDrawerPullerIcon />}
        </SwipeableDrawerPuller>

        <SwipeableDrawerTitle>{drawerBleedingTitle}</SwipeableDrawerTitle>
      </SwipeableDrawerHeader>

      <SwipeableDrawerBody drawerBleedingHeight={drawerBleedingHeight}>
        {children}
      </SwipeableDrawerBody>
    </StyledSwipeableDrawer>
  );
};
