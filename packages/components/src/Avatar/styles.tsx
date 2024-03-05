import { Avatar } from '@mui/material';

import { styled } from '../styles/styled';

export const StyledAvatar = styled(Avatar)`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: ${({ theme }) => theme.typography.h5.fontWeight};
`;
