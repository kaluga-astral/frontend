import { Grid, type GridProps } from '../Grid';
import { styled } from '../styles/styled';

type DialogActionsGridProps = GridProps & { isMobile: boolean };

export const DialogActionsGrid = styled(Grid, {
  shouldForwardProp: (prop) => prop !== 'isMobile',
})<DialogActionsGridProps>`
  ${({ isMobile }) => !isMobile && 'justify-content: end'};
  grid-auto-flow: ${({ isMobile }) => (isMobile ? 'row' : 'column')};
`;
