import { Link } from '@mui/material';
import { theme } from '@astral/tests/src/theme';

import { styled } from '../styles';

export const StyledLink = styled(Link)`
  padding: ${theme.spacing(0.5, 0.25, 0.5, 0)};

  font-size: ${theme.typography.fontSize}px;
  color: ${theme.palette.components.link.main};

  &:active {
    color: ${theme.palette.components.link.active};
  }

  &:visited {
    color: ${theme.palette.components.link.visited};
  }

  &:hover {
    color: ${theme.palette.components.link.hover};

    * {
      text-decoration: underline;
    }
  }

  &:focus {
    border-radius: 4px;
    outline: 2px solid ${theme.palette.primary[400]};
  }

  & div {
    display: inline-flex;
    gap: ${theme.spacing(1)};
    align-items: baseline;
    justify-content: flex-start;
  }

  .MuiSvgIcon-root {
    align-self: center;

    width: 16px;
    height: 16px;
  }
`;
