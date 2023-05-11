import { Global } from '@emotion/react';
import { CssBaseline, ScopedCssBaseline } from '@mui/material';
import { CssBaselineProps } from '@mui/material/CssBaseline';

import { Theme, useTheme } from '../theme';

type GlobalStylesProps = CssBaselineProps & {
  withoutGlobalStyles?: boolean;
};

export const GlobalStyles = ({
  children,
  withoutGlobalStyles = false,
  ...props
}: GlobalStylesProps) => {
  const theme: Theme = useTheme();

  return (
    <>
      {!withoutGlobalStyles && <CssBaseline {...props}>{children}</CssBaseline>}
      {withoutGlobalStyles && (
        <ScopedCssBaseline {...props}>{children}</ScopedCssBaseline>
      )}
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
