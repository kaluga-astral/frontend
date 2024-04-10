import {
  LegacyGrid,
  Menu,
  MenuItem,
  ToggleButton,
  ToggleButtonGroup,
  styled,
} from '@astral/ui';

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

// as typeof MenuItem необходим для возможности прокинуть component
// https://github.com/mui/material-ui/issues/15695
export const StyledMenuItem = styled(MenuItem)`
  padding-left: ${({ theme }) => theme.spacing(6)};
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
