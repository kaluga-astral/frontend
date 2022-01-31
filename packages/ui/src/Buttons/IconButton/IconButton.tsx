import { BaseButtonProps } from '../types';

import { StyledIconButton } from './styled';

export const IconButton = ({ children, ...props }: BaseButtonProps) => {
  return <StyledIconButton {...props}>{children}</StyledIconButton>;
};
