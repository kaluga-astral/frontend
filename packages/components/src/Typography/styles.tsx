import { Typography } from '@mui/material';

import { styled } from '../styles';

import type { TypographyProps } from './Typography';

export const TypographyWrapper = styled(Typography, {
  shouldForwardProp: (prop) => prop !== 'isUpperCase',
})<TypographyProps>`
  text-transform: ${({ isUpperCase }) => (isUpperCase ? 'uppercase' : '')};
` as typeof Typography;
