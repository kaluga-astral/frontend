import { type ReactNode } from 'react';
import { type SwipeableDrawerProps as MuiSwipeableDrawerProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import {
  Body,
  Header,
  Puller,
  PullerIcon,
  StyledSwipeableDrawer,
  Title,
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

/**
  @deprecated
 */
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
      <Header drawerBleedingHeight={drawerBleedingHeight}>
        <Puller>{drawerBleedingIcon || <PullerIcon />}</Puller>

        <Title noWrap>{drawerBleedingTitle}</Title>
      </Header>

      <Body drawerBleedingHeight={drawerBleedingHeight}>{children}</Body>
    </StyledSwipeableDrawer>
  );
};
