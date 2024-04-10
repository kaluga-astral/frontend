import {
  LegacyGrid,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  styled,
} from '@astral/ui';

import { LOGO_WRAPPER_CLASSNAME } from './constants';

export const StyledMenu = styled(Menu)`
  .MuiPaper-root > .MuiList-root {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 285px;
    min-height: 100px;
    padding: ${({ theme }) => theme.spacing(3, 0)};
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: fit-content;
`;

// as typeof MenuItem необходим для возможности прокинуть component
// https://github.com/mui/material-ui/issues/15695
export const StyledMenuItem = styled(MenuItem)`
  padding-left: ${({ theme }) => theme.spacing(6)};

  /* Стили чисто для демонстрации */
  &:hover {
    .${LOGO_WRAPPER_CLASSNAME} {
      /* Перекрывается background'ом img'а */
      background-color: ${({ theme }) => theme.palette.background.elementHover};

      /* Ломает существующие иконки */
      img {
        background-color: ${({ theme }) =>
          theme.palette.background.elementHover};
      }
    }
  }
` as typeof MenuItem;

export const Logo = styled('img', {
  shouldForwardProp: (prop) => prop !== 'color',
})`
  width: 40px;
  height: 40px;
  margin-right: ${({ theme }) => theme.spacing(4)};

  background-color: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.shape.small};
`;

export const ErrorContainer = styled(LegacyGrid)`
  column-gap: ${({ theme }) => theme.spacing(2)};

  color: ${({ theme }) => theme.palette.error.dark};
`;

export const TenantsToggleButtonGroup = styled(ToggleButtonGroup)`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(1, 4, 4)};
`;

export const TenantToggleButton = styled(ToggleButton)`
  flex: 1;

  text-transform: uppercase;
`;
