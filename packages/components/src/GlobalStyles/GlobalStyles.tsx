import { Global } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { CssBaselineProps as GlobalStylesProps } from '@mui/material/CssBaseline';

import { Theme, useTheme } from '../theme';

export const GlobalStyles = ({ children, ...props }: GlobalStylesProps) => {
  const theme: Theme = useTheme();

  return (
    <>
      <CssBaseline {...props}>{children}</CssBaseline>
      <Global
        styles={{
          html: {
            fontSize: theme.typography.htmlFontSize,
            [theme.breakpoints.down('sm')]: {
              fontSize: 16,
            },
          },
          '*': {
            scrollbarWidth: 'thin',
          },
          '*::-webkit-scrollbar': {
            width: 4,
            height: 4,
          },
          '*::-webkit-scrollbar-thumb': {
            borderRadius: theme.shape.small,
            backgroundColor: theme.palette.grey[300],
          },
        }}
      />
    </>
  );
};
