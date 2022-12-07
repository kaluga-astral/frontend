import { styled } from '../../styles';
import { MenuItem } from '../../MenuItem';
import { Grid } from '../../Grid';

// as typeof MenuItem необходим для возможности прокинуть component
// https://github.com/mui/material-ui/issues/15695
export const ProductItem = styled(MenuItem)`
  padding-left: ${({ theme }) => theme.spacing(6)};
` as typeof MenuItem;

export const Logo = styled('img', {
  shouldForwardProp: (prop) => prop !== 'color',
})`
  width: 40px;
  height: 40px;
  margin-right: ${({ theme }) => theme.spacing(4)};

  background-color: ${({ color }) => color};
  border-radius: ${({ theme }) => theme.shape.small};
`;

export const TitleErrorContainer = styled(Grid)`
  color: ${({ theme }) => theme.palette.error.dark};
  column-gap: ${({ theme }) => theme.spacing(2)};
`;
