import { StyledTag } from './styled';
import { TagProps } from './types';

const Tag = ({ children, color, variant, ...props }: TagProps) => {
  return <StyledTag customColor={color} customVariant={variant} {...props} />;
};

export default Tag;
