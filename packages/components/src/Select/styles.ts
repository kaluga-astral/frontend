import { CrossSmOutlineSm } from '@astral/icons';

import { styled } from '../styles';
import { MenuItem } from '../MenuItem';
import { IconButton } from '../IconButton';

export const ProgressWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 64px;

  .MuiCircularProgress-root {
    margin-top: ${({ theme }) => theme.spacing(5)};

    color: ${({ theme }) => theme.palette.grey['900']};
  }
`;

export const Placeholder = styled(MenuItem)`
  display: none;
`;

export const StyledIconButton = styled(IconButton)`
  width: 16px;
  height: 16px;
  margin-right: ${({ theme }) => theme.spacing(9)};

  background-color: ${({ theme }) => theme.palette.grey['500']};
  border-radius: 50%;

  &:hover {
    background-color: ${({ theme }) => theme.palette.grey['700']};
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 16px;
    height: 16px;
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;

export const StyledCrossIcon = styled(CrossSmOutlineSm)`
  width: 16px;
  height: 16px;

  fill: ${({ theme }) => theme.palette.common.white};
`;
