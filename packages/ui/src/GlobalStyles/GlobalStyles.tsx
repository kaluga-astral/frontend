import { CssBaselineProps as GlobalStylesProps } from '@mui/material/CssBaseline';

import { StyledCssBaseline } from './styled';

export const GlobalStyles = ({ children, ...props }: GlobalStylesProps) => {
  return <StyledCssBaseline {...props}>{children}</StyledCssBaseline>;
};
