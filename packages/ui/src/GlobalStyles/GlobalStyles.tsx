import { Global } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { CssBaselineProps as GlobalStylesProps } from '@mui/material/CssBaseline';

import { Theme } from '../theme';
import { useTheme } from '../theme/hooks/useTheme';

export const GlobalStyles = ({ children, ...props }: GlobalStylesProps) => {
  const theme: Theme = useTheme();

  return (
    <>
      <CssBaseline {...props}>{children}</CssBaseline>
      <Global
        styles={{
          html: {
            fontSize: theme.typography.htmlFontSize,
          },
        }}
      />
    </>
  );
};
