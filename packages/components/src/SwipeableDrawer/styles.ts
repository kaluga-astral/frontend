import {
  SwipeableDrawer,
  SwipeableDrawerProps,
  Typography,
} from '@mui/material';

import { styled } from '../styles';
import { TypographyProps } from '../Typography';

type SwipeableDrawerHeaderProps = {
  drawerBleedingHeight: number;
};

type SwipeableDrawerBodyProps = {
  drawerBleedingHeight: number;
};

/**
 * @description Вывод высоты шапки компонента.
 */
const getHeight = ({
  drawerBleedingHeight,
}: SwipeableDrawerHeaderProps): string => `${drawerBleedingHeight}px`;

/**
 * @description Расчет максимальной высоты тела компонента с учетом абсолютно
 * позиционированной шапки, плюс отступ от верха экрана в размер шапки.
 */
const calcMaxBodyHeight = ({
  drawerBleedingHeight,
}: SwipeableDrawerHeaderProps): string =>
  `calc(100vh - ${drawerBleedingHeight}px * 2)`;

/**
 * @description Определение плавной анимации полного скрытия компонента.
 * Предусматривает для <SwipeableDrawer keepMounted={false} /> переопределение
 * базового "transition" плавно выводя компонент за рамки видимой области экрана.
 */
const getUnmountTransform = ({
  open,
  ModalProps,
}: SwipeableDrawerProps): string => {
  return !ModalProps?.keepMounted && !open
    ? 'translateY(100vh) !important'
    : 'none';
};

export const StyledSwipeableDrawer = styled(
  SwipeableDrawer,
)<SwipeableDrawerProps>`
  .MuiPaper-root {
    overflow: visible;

    transform: ${(props) => getUnmountTransform({ ...props })};
  }

  .MuiBackdrop-root {
    background-color: ${({ theme }) => theme.palette.background.modalShadow};
  }
`;

export const SwipeableDrawerHeader = styled.header<SwipeableDrawerHeaderProps>`
  position: absolute;
  top: -${(props) => getHeight({ ...props })};

  display: flex;
  justify-content: center;
  width: 100%;
  height: ${(props) => getHeight({ ...props })};
  padding: ${({ theme }) => theme.spacing(6, 6, 3, 6)};

  background-color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.background.default
      : theme.palette.grey[800]};
  border-top-left-radius: ${({ theme }) => theme.shape.medium};
  border-top-right-radius: ${({ theme }) => theme.shape.medium};
  box-shadow: ${({ theme }) => theme.shadows[8]};
  visibility: visible;
`;

export const SwipeableDrawerPuller = styled.div`
  position: absolute;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;

  svg {
    fill: ${({ theme }) =>
      theme.palette.mode === 'light'
        ? theme.palette.grey[900]
        : theme.palette.grey[300]};
  }
`;

export const SwipeableDrawerPullerIcon = styled.div`
  width: 14px;
  height: 2px;

  background-color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[900]
      : theme.palette.grey[300]};
  border-radius: ${({ theme }) => theme.shape.small};
`;

export const SwipeableDrawerTitle = styled(Typography)<TypographyProps>`
  color: ${({ theme }) => theme.palette.grey[700]};
`;

export const SwipeableDrawerBody = styled.div<SwipeableDrawerBodyProps>`
  z-index: ${({ theme }) => theme.zIndex.mobileStepper};

  height: 100%;
  max-height: ${(props) => calcMaxBodyHeight({ ...props })};
  overflow: auto;

  background-color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.background.default
      : theme.palette.grey[800]};
`;
