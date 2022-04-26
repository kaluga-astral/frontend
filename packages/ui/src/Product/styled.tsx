import { Button } from '../Button';
import { styled } from '../styles';

export const Root = styled(Button)`
  display: inline-flex;
  gap: 10px;
  align-items: center;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: ${({ theme }) => theme.typography.pxToRem(20)};
`;
