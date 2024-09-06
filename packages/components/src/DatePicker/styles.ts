import { styled } from '../styles';
import { Button } from '../Button';

export const StyledButton = styled(Button)`
  width: 100%;
`;

export const Wrapper = styled('div', {
  shouldForwardProp: (prop) => !['$isVisible'].includes(prop),
})<{ $isVisible: boolean }>`
  padding: ${({ theme }) => theme.spacing(4)};

  visibility: ${({ $isVisible }) => ($isVisible ? 'visible' : 'hidden')};
  box-shadow: 0 -1px 10px 0 #072d571a;
`;
