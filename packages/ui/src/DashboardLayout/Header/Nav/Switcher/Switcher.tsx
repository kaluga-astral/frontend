import { forwardRef } from 'react';
import { ProductsFillMd } from '@astral/icons';

import { IconButton } from '../../../../IconButton';

import { Root } from './styled';
import { SwitcherProps } from './types';

export const Switcher = forwardRef<HTMLDivElement, SwitcherProps>((_, ref) => {
  return (
    <Root ref={ref}>
      <IconButton variant="text">
        <ProductsFillMd />
      </IconButton>
    </Root>
  );
});

export default Switcher;
