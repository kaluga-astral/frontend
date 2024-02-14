import { Grid, type GridProps } from '../Grid';
import { styled } from '../styles/styled';

export const DialogActionsGrid = styled(Grid)<GridProps>`
  ${({ theme }) => theme.breakpoints.up('sm')} {
    grid-auto-flow: column;
    justify-content: end;
  }
`;

// ${({ isMobile }) => !isMobile && 'justify-content: end'};
// grid-auto-flow: ${({ isMobile }) => (isMobile ? 'row' : 'column')};
