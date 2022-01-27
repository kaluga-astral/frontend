// import { TagProps } from './types';
import { StyledTag } from './styled';

const Tag = ({ children, color, variant, ...props }: any) => {
  return <StyledTag customcolor={color} customvariant={variant} {...props} />;
};

export default Tag;
