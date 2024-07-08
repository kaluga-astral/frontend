import { styled } from '../styles';
import { Typography } from '../Typography';

export const StyledTypography = styled(Typography)`
  max-width: 100%;
  margin-right: ${({ theme }) => theme.spacing(3)};

  white-space: nowrap;
`;
