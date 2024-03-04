import { type ReactElement, forwardRef } from 'react';
import { type LinkProps as MuiLinkProps } from '@mui/material/Link';

import { type WithoutEmotionSpecific } from '../types';

import { StyledLink } from './styles';

export type LinkAddon = () => ReactElement | null;

export type LinkProps = Pick<
  WithoutEmotionSpecific<MuiLinkProps>,
  'rel' | 'href' | 'className' | 'classes' | 'style' | 'children' | 'key'
> & {
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
      <div>
        {StartAddon && <StartAddon />}
        {children}
        {EndAddon && <EndAddon />}
      </div>
    );

    return (
      <StyledLink ref={ref} {...props}>
        {labelContent}
      </StyledLink>
    );
  },
);
