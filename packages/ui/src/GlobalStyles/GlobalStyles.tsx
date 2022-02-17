import { Global } from '@emotion/react';
import { CssBaseline, Theme } from '@mui/material';
import { CssBaselineProps as GlobalStylesProps } from '@mui/material/CssBaseline';

import { useTheme } from '../theme';

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
