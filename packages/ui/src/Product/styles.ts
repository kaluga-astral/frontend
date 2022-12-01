import { styled } from '../styles';
import { Button } from '../Button';

export const ProductButton = styled(Button)`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
`;
