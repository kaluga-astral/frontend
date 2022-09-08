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

export const SwipeableDrawer = ({
  drawerBleedingTitle,
  drawerBleedingIcon,
  drawerBleedingHeight = 56,
  children,
  ...rest
}: SwipeableDrawerProps): JSX.Element => {
  return (
    <StyledSwipeableDrawer {...rest} swipeAreaWidth={drawerBleedingHeight}>
      <SwipeableDrawerHeader drawerBleedingHeight={drawerBleedingHeight}>
        <SwipeableDrawerPuller>
          {drawerBleedingIcon ? (
            drawerBleedingIcon
          ) : (
            <SwipeableDrawerPullerIcon />
          )}
        </SwipeableDrawerPuller>

        <SwipeableDrawerTitle>{drawerBleedingTitle}</SwipeableDrawerTitle>
      </SwipeableDrawerHeader>

      <SwipeableDrawerBody drawerBleedingHeight={drawerBleedingHeight}>
        {children}
      </SwipeableDrawerBody>
    </StyledSwipeableDrawer>
  );
};

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
