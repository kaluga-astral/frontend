import { styled } from '../../../styles';
import { Button } from '../../../Button';
import { DropdownButton } from '../../../DropdownButton';

export const MainActionButton = styled(Button)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: fill-available;
  }
`;

export const MainActionDropdownButton = styled(DropdownButton)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: fill-available;
  }
`;
