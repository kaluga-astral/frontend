import { Link } from '@mui/material';

import { styled } from '../styles';

export const StyledLink = styled(Link)`
  display: inline-flex;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: baseline;
  justify-content: flex-start;

  font-size: ${({ theme }) => theme.typography.fontSize}px;
  color: ${({ theme }) => theme.palette.components.link.main};
  text-decoration: none;

  &:active {
    color: ${({ theme }) => theme.palette.components.link.active};
  }

  &:visited {
    color: ${({ theme }) => theme.palette.components.link.visited};
  }

  &:hover {
    color: ${({ theme }) => theme.palette.components.link.hover};
    text-decoration: underline;
  }

  &:focus {
    border-radius: 4px;
    outline: 2px solid ${({ theme }) => theme.palette.primary[400]};
  }

  .MuiSvgIcon-root {
    align-self: center;

    width: 16px;
    height: 16px;
  }
`;
