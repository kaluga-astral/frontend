import { styled } from '../styles';
import { Grid } from '../Grid';

export const Actions = styled(Grid)`
  grid-auto-flow: column;
  grid-gap: ${({ theme }) => theme.spacing(4)};
  justify-content: flex-start;
`;
