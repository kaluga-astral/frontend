import { styled } from '../../styles';
import { MenuItem } from '../../MenuItem';
import { Typography } from '../../Typography';

export const StyledMenuItem = styled(MenuItem)`
  height: 48px;
`;

export const StyledLabel = styled(Typography)`
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
`;

export const StyledMenuWrapper = styled.ul`
  padding: ${({ theme }) => theme.spacing(2, 0, 0, 0)};
`;
