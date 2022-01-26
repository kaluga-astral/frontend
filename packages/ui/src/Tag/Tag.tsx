// import { TagProps } from './types';
import { StyledTag } from './styled';

const Tag = ({ children, color, variant, ...props }: any) => {
  return (
    <StyledTag
      customColor={color}
      variant="filled"
      customVariant={variant}
      {...props}
    />
  );
};

export default Tag;
