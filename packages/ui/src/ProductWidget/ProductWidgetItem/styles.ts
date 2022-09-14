import { styled } from '../../styles';

export const Logo = styled.img`
  width: 44px;
  height: 44px;
  margin-right: ${({ theme }) => theme.spacing(4)};

  background-color: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.shape.small};
`;

export const ProductLink = styled.a`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  padding: ${({ theme }) => theme.spacing(2)};

  color: inherit;
  text-decoration: none;

  border-radius: ${({ theme }) => theme.shape.small};

  &:hover {
    background-color: ${({ theme }) => theme.palette.primary['100']};
  }
`;
