import { styled } from '../styles';
import { Typography } from '../Typography';

export const StyledTypography = styled(Typography)`
  max-width: 100%;
  margin: 0 ${({ theme }) => theme.spacing(3)} 0 0;

  white-space: nowrap;
`;
