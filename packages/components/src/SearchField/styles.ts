import { styled } from '../styles';
import { IconButton } from '../IconButton';

export const StyledIconButton = styled(IconButton)<{
  isActive: boolean;
}>`
  opacity: ${({ isActive }) => (isActive ? 1 : 0)};
`;
