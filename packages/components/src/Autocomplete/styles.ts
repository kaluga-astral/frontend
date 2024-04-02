import { styled } from '../styles';
import { Paper } from '../Paper';
import { MenuItem } from '../MenuItem';

export const PopperWrapper = styled(Paper)`
  margin-top: ${({ theme }) => theme.spacing(2)};
  padding: ${({ theme }) => theme.spacing(6, 0, 6, 3)};
`;

export const StyledMenuItem = styled(MenuItem)`
  height: ${({ theme }) => theme.spacing(8)};
`;
