import { Button } from '../../../../Button';
import { styled } from '../../../../styles';

export const Root = styled(Button)`
  display: flex;
  gap: 10px;
  align-items: center;
  padding: 0 4px;
`;

export const Name = styled.span`
  font-size: ${({ theme }) => theme.typography.pxToRem(16)};
  line-height: ${({ theme }) => theme.typography.pxToRem(20)};
`;
