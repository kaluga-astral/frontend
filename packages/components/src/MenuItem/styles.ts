import { MenuItem as MuiMenuItem } from '@mui/material';

import { styled } from '../styles';

export const StyledMenuItem = styled(MuiMenuItem)`
  max-height: ${({ theme }) => theme.spacing(13)};
`;
