import { styled } from '../styles';
import { Button } from '../Button';

export const StyledButton = styled(Button)`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: ${({ theme }) => theme.typography.link.fontWeight};

  ${({ theme }) => theme.breakpoints.down('sm')} {
    font-size: ${({ theme }) => theme.typography.body1.fontSize};
    font-weight: ${({ theme }) => theme.typography.link.fontWeight};
  }

  &:hover {
    background-color: unset;
  }

  &:active {
    color: unset;

    background-color: unset;
  }
`;
