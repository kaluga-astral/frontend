import { styled } from '../../styles';
import { MenuItem } from '../../MenuItem';

export const ProductItem = styled(MenuItem)`
  width: 100%;

  border-radius: ${({ theme }) => theme.shape.small};
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: ${({ theme }) => theme.spacing(2)};

  background-color: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.shape.small};
`;
