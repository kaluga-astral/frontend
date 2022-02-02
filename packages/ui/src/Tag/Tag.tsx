// import { TagProps } from './types';
import { IconButton } from '../IconButton';

import { StyledTag } from './styled';

const Tag = ({ children, color, variant, deleteIcon, ...props }: any) => {
  return (
    <StyledTag
      customcolor={color}
      customvariant={variant}
      deleteIcon={<IconButton variant="light">{deleteIcon}</IconButton>}
      {...props}
    />
  );
};

export default Tag;
