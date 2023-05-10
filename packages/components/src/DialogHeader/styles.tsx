import { Grid, GridContainerProps } from '../Grid';
import { styled } from '../styles';

export const StyledContainer = styled(Grid)<GridContainerProps>`
  padding: ${({ theme }) => theme.spacing(4, 6)};
  overflow: hidden;
`;
