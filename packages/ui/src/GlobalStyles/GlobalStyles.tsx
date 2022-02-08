import { CssBaseline } from '@mui/material';
import { CssBaselineProps as GlobalStylesProps } from '@mui/material/CssBaseline';
import { Global } from '@emotion/react';

export const GlobalStyles = ({ children, ...props }: GlobalStylesProps) => {
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
