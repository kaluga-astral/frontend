import { CssBaseline } from '@mui/material';
import { CssBaselineProps as GlobalStylesProps } from '@mui/material/CssBaseline';

import { styled } from '../styles';

export const StyledCssBaseline = styled(CssBaseline)<GlobalStylesProps>`
  html {
    font-size: ${({ theme }) => theme.typography.htmlFontSize}px;
  }
`;
