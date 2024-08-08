import {
  SwipeableDrawer,
  type SwipeableDrawerProps,
  Typography,
} from '@mui/material';

import { styled } from '../styles';
import { type TypographyProps } from '../Typography';

type SwipeableDrawerHeaderProps = {
  drawerBleedingHeight: number;
};

type SwipeableDrawerBodyProps = {
  drawerBleedingHeight: number;
};

/**
 * Вывод высоты шапки компонента.
 */
const getHeight = ({
  drawerBleedingHeight,
}: SwipeableDrawerHeaderProps): string => `${drawerBleedingHeight}px`;

/**
 * Расчет максимальной высоты тела компонента с учетом абсолютно
 * позиционированной шапки, плюс отступ от верха экрана в размер шапки.
 */
const calcMaxBodyHeight = ({
  drawerBleedingHeight,
}: SwipeableDrawerHeaderProps): string =>
  `calc(100dvh - ${drawerBleedingHeight}px * 2)`;

/**
 * Определение плавной анимации полного скрытия компонента.
 * Предусматривает для <SwipeableDrawer keepMounted={false} /> переопределение
 * базового "transition" плавно выводя компонент за рамки видимой области экрана.
 */
const getUnmountTransform = ({
  open,
  ModalProps,
}: SwipeableDrawerProps): string => {
  return !ModalProps?.keepMounted && !open
    ? 'translateY(100dvh) !important'
    : 'none';
};

export const StyledSwipeableDrawer = styled(
  SwipeableDrawer,
)<SwipeableDrawerProps>`
  .MuiPaper-root {
    transform: ${(props) => getUnmountTransform({ ...props })};

    overflow: visible;
  }

  .MuiBackdrop-root {
    background-color: ${({ theme }) => theme.palette.background.modalShadow};
  }
`;

export const Header = styled.header<SwipeableDrawerHeaderProps>`
  position: absolute;
  top: -${(props) => getHeight({ ...props })};

  display: flex;
  justify-content: center;

  width: 100%;
  height: ${(props) => getHeight({ ...props })};
  padding: ${({ theme }) => theme.spacing(6, 6, 3, 6)};

  visibility: visible;
  background-color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.background.default
      : theme.palette.grey[800]};
  border-top-left-radius: ${({ theme }) => theme.shape.medium};
  border-top-right-radius: ${({ theme }) => theme.shape.medium};
  box-shadow: ${({ theme }) => theme.shadows[8]};
`;

export const Puller = styled.div`
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

export const PullerIcon = styled.div`
  width: 14px;
  height: 2px;

  background-color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[900]
      : theme.palette.grey[300]};
  border-radius: ${({ theme }) => theme.shape.small};
`;

export const Title = styled(Typography)<TypographyProps>`
  color: ${({ theme }) => theme.palette.grey[700]};
`;

export const Body = styled.div<SwipeableDrawerBodyProps>`
  z-index: ${({ theme }) => theme.zIndex.mobileStepper};

  overflow: auto;

  height: 100%;
  max-height: ${(props) => calcMaxBodyHeight({ ...props })};

  background-color: ${({ theme }) =>
    theme.palette.mode === 'light'
      ? theme.palette.background.default
      : theme.palette.grey[800]};
`;
