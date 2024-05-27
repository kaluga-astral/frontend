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
  position: absolute;
  right: 0;

  margin-right: ${({ theme }) => theme.spacing(9)};
  padding: 0;

  background-color: transparent;

  svg {
    width: 16px;
    height: 16px;

    fill: ${({ theme }) => theme.palette.grey['500']};
  }

  &:hover {
    background-color: transparent;

    svg {
      fill: ${({ theme }) => theme.palette.grey['700']};
    }
  }

  ${({ theme }) => theme.breakpoints.down('sm')} {
    width: 32px;
    height: 32px;
    padding: ${({ theme }) => theme.spacing(1)};
  }
`;
