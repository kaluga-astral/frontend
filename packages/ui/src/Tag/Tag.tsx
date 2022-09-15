import { forwardRef } from 'react';
import { CrossSmOutlineSm } from '@astral/icons';

import { StyledTag } from './styled';
import { TagProps } from './types';

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ color, variant, deleteIcon, ...props }, ref) => {
    return (
      <StyledTag
        ref={ref}
        customColor={color}
        customVariant={variant}
        {...props}
        deleteIcon={deleteIcon ? deleteIcon : <CrossSmOutlineSm />}
      />
    );
  },
);
