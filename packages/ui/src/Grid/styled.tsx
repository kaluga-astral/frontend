import { Box, BoxProps } from '@mui/material';
import styled from '@emotion/styled';

type StyledGridProps = BoxProps & { container: boolean };

export const StyledGrid = styled(Box)<StyledGridProps>`
  display: ${({ container }) => container && 'grid'};
`;
