import { Box, type BoxProps } from '@mui/material';

import { styled } from '../styles';
import { type WithoutEmotionSpecific } from '../types';

type StyledGridProps = WithoutEmotionSpecific<BoxProps> & {
  container: boolean;
};

export const StyledGrid = styled(Box, {
  shouldForwardProp: (prop: PropertyKey) => prop !== 'container',
})<StyledGridProps>`
  display: ${({ container }) => container && 'grid'};
`;
