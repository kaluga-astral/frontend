import { styled } from '../styles';
import { Button } from '../Button';

export const CancelButton = styled(Button)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    order: 1;
  }
`;
