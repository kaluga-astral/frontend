import { type ReactElement, forwardRef } from 'react';
import { type LinkProps as MuiLinkProps } from '@mui/material/Link';

import { type WithoutEmotionSpecific } from '../types';
import { Grid } from '../Grid';

import { StyledLink } from './styles';

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
  ({ startAddon: StartAddon, endAddon: EndAddon, children, ...props }, ref) => {
    const labelContent = (
      <Grid
        component="span"
        direction="column"
        spacing={1}
        style={{
          alignItems: 'baseline',
          justifyContent: 'flex-start',
          display: 'inline grid',
        }}
      >
        {StartAddon && <StartAddon />}
        <span>{children}</span>
        {EndAddon && <EndAddon />}
      </Grid>
    );

    return (
      <StyledLink ref={ref} {...props}>
        {labelContent}
      </StyledLink>
    );
  },
);
