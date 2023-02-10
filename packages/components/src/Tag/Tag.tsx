import { forwardRef } from 'react';
import { CrossSmOutlineSm } from '@astral/icons';

import { CheckableStyledTag, StyledTag } from './styled';
import { TagProps } from './types';

export const Tag = forwardRef<HTMLDivElement, TagProps>(
  ({ color, variant, deleteIcon, checkable, onChange, ...props }, ref) => {
    const Component = checkable ? CheckableStyledTag : StyledTag;

    const handleClickTag = () => {
      onChange?.(!props.checked);
    };

    return (
      <Component
        customColor={color}
        customVariant={variant}
        clickable={false}
        onClick={handleClickTag}
        ref={ref}
        {...props}
        deleteIcon={deleteIcon ? deleteIcon : <CrossSmOutlineSm />}
      />
    );
  },
);
