import { Grid, type GridProps } from '../Grid';
import { styled } from '../styles';

export const StyledGrid = styled(Grid)<GridProps>`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-auto-flow: column;
    justify-content: end;
  }
`;
