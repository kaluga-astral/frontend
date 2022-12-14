import { Checkbox } from '@mui/material';

import { styled } from '../styles';

import { CheckboxProps } from './types';

export const StyledCheckbox = styled(Checkbox)<CheckboxProps>`
  padding: 5px;

  color: ${({ theme }) => theme.palette.background.element};

  border-radius: unset;

  &:hover {
    color: ${({ theme }) => theme.palette.grey[100]};
  }

  & .MuiSvgIcon-border {
    color: ${({ theme }) => theme.palette.grey[300]};
  }

  & > svg {
    width: 1rem;
    height: 1rem;
  }

  &.Mui-disabled {
    color: ${({ theme }) => theme.palette.grey[200]};

    & .MuiSvgIcon-border {
      color: currentColor;
    }
  }

  &.Mui-checked,
  &.MuiCheckbox-indeterminate {
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover {
      color: ${({ theme }) => theme.palette.primary[700]};
    }

    &.Mui-disabled {
      color: ${({ theme }) => theme.palette.grey[500]};
    }

    & .MuiSvgIcon-mark {
      color: ${({ theme }) => theme.palette.common.white};
    }
  }
`;
