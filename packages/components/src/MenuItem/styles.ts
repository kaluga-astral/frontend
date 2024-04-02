import { MenuItem as MuiMenuItem } from '@mui/material';

import { styled } from '../styles';

export const StyledMenuItem = styled(MuiMenuItem)`
  min-height: ${({ theme }) => theme.spacing(8)};
  max-height: ${({ theme }) => theme.spacing(13)};
  padding-top: ${({ theme }) => theme.spacing(1)};
  padding-bottom: ${({ theme }) => theme.spacing(1)};
`;
