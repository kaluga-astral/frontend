import { styled } from '../../../styles';
import { Button } from '../../../Button';
import { DropdownButton } from '../../../DropdownButton';

export const StyledButton = styled(Button)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: fill-available;
  }
`;

export const StyledDropdownButton = styled(DropdownButton)`
  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: fill-available;
  }
`;
