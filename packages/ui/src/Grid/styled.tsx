import { Box, BoxProps } from '@mui/material';

import { styled } from '../styles';

type StyledGridProps = BoxProps & { container: boolean };

export const StyledGrid = styled(Box, {
  shouldForwardProp: (prop: PropertyKey) => prop !== 'container',
})<StyledGridProps>`
  display: ${({ container }) => container && 'grid'};
`;
