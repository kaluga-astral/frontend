import { styled } from '../../styles';
import { Button } from '../../Button';

export const Wrapper = styled(Button)`
  min-width: auto;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    min-width: 48px;
  }
`;
