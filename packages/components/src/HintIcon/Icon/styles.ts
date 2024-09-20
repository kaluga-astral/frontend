import { styled } from '../../styles';

export const IconWrapper = styled('div', {
  shouldForwardProp: (prop) => !['$color'].includes(prop),
})<{ $color: string }>`
  display: flex;

  color: ${({ $color }) => $color};
`;
