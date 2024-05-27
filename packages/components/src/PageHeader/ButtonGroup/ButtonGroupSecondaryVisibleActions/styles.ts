import { Button } from '../../../Button';
import { styled } from '../../../styles';

export const StyledButton = styled(Button)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: fill-available;
  }
`;
