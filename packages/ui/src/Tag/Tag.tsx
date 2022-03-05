import { CrossSmOutlineSm } from '@astral/icons';

import { StyledTag } from './styled';
import { TagProps } from './types';

export const Tag = ({ color, variant, deleteIcon, ...props }: TagProps) => {
  return (
    <StyledTag
      customColor={color}
      customVariant={variant}
      {...props}
      deleteIcon={deleteIcon ? deleteIcon : <CrossSmOutlineSm />}
    />
  );
};
