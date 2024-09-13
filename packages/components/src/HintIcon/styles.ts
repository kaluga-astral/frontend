import { styled } from '../styles';

export const DrawerContent = styled.div`
  padding: ${({ theme }) => theme.spacing(5, 4)};
`;

export const IconWrapper = styled('div', {
  shouldForwardProp: (prop) => !['$color'].includes(prop),
})<{ $color: string }>`
  display: flex;

  color: ${({ $color }) => $color};
`;
