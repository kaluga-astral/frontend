import { styled } from '../styles';
import { Button } from '../Button';

export const FlowButtonWrapper = styled(Button)`
  width: 300px;
  min-height: 71px;
  padding: ${({ theme: { spacing } }) => spacing(4, 5)};

  border-radius: ${({ theme }) => theme.shape.medium};
`;

export const FlowButtonContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
`;
