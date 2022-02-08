import { Box, BoxProps } from '@mui/material';

import { styled } from '../styles';

type StyledGridProps = BoxProps & { container: boolean };

export const StyledGrid = styled(Box)<StyledGridProps>`
  display: ${({ container }) => container && 'grid'};
`;
