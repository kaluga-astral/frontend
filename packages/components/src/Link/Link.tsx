import { type ReactElement, forwardRef } from 'react';
import { Link as MuiLink } from '@mui/material';
import { type LinkProps as MuiLinkProps } from '@mui/material/Link';

import { type WithoutEmotionSpecific } from '../types';
import { Grid } from '../Grid';

export type LinkAddon = () => ReactElement | null;

export type LinkProps = WithoutEmotionSpecific<MuiLinkProps> & {
  /**
   * Контент слева
   */
  startAddon?: LinkAddon;
  /**
   * Контент справа
   */
  endAddon?: LinkAddon;
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      underline = 'hover',
      variant = 'body1',
      color = 'primary',
      startAddon: StartAddon,
      endAddon: EndAddon,
      children,
      ...props
    },
    ref,
  ) => {
    const labelContent = (
      <Grid container component="span" direction="column" spacing={1}>
        {StartAddon && <StartAddon />}
        {children}
        {EndAddon && <EndAddon />}
      </Grid>
    );

    return (
      <MuiLink
        ref={ref}
        variant={variant}
        color={color}
        underline={underline}
        {...props}
      >
        {labelContent}
      </MuiLink>
    );
  },
);
