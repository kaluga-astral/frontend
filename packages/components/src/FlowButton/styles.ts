import { styled } from '../styles';
import { Button } from '../Button';
import { Typography } from '../Typography';

export const FlowButtonWrapper = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 300px;
  min-height: 71px;
  padding: ${({ theme: { spacing } }) => spacing(4, 5)};

  border-radius: ${({ theme: { shape } }) => shape.medium};

  ${({ theme: { breakpoints } }) => breakpoints.down('sm')} {
    padding: ${({ theme: { spacing } }) => spacing(4, 5)};
  }
`;

export const TargetTextWrapper = styled(Typography)`
  margin-bottom: ${({ theme: { spacing } }) => spacing(1)};

  text-align: start;
`;
