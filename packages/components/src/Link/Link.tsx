import { forwardRef } from 'react';
import { type LinkProps as MuiLinkProps } from '@mui/material';
import { OpenLinkOutlineSm } from '@astral/icons';

import { type WithoutEmotionSpecific } from '../types';

import { StyledLink } from './styles';

export type LinkProps = Pick<
  WithoutEmotionSpecific<MuiLinkProps>,
  | 'rel'
  | 'href'
  | 'className'
  | 'classes'
  | 'style'
  | 'children'
  | 'key'
  | 'target'
> & {
  /**
   * Добавление иконки
   */
  withAdornment?: 'start' | 'end';
};

export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  ({ withAdornment, children, ...props }, ref) => {
    const labelContent = (
      <>
        {withAdornment === 'start' && <OpenLinkOutlineSm />}
        {children}
        {withAdornment === 'end' && <OpenLinkOutlineSm />}
      </>
    );

    return (
      <StyledLink ref={ref} {...props}>
        {labelContent}
      </StyledLink>
    );
  },
);
