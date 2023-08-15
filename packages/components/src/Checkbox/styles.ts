import { Checkbox, css } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { CheckboxProps } from './Checkbox';

const getErrorStyles = (theme: Theme) => css`
  &.Mui-checked {
    color: ${theme.palette.red[800]};

    &:hover {
      color: ${theme.palette.red[700]};
    }
  }

  & .MuiSvgIcon-border {
    fill: ${theme.palette.red[800]};
  }
`;

export const CheckboxStyled = styled(Checkbox, {
  shouldForwardProp: (prop) => prop !== 'isError',
})<CheckboxProps>`
  padding: 5px;

  color: ${({ theme }) => theme.palette.background.element};

  border-radius: unset;

  &:hover {
    color: ${({ theme }) => theme.palette.grey[100]};
  }

  & .MuiSvgIcon-border {
    fill: ${({ theme }) => theme.palette.grey[300]};
  }

  & > svg {
    width: 1rem;
    height: 1rem;
  }

  &.Mui-disabled {
    color: ${({ theme }) => theme.palette.grey[200]};

    & .MuiSvgIcon-border {
      fill: currentColor;
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
      fill: ${({ theme }) => theme.palette.common.white};
    }
  }

  ${({ isError, theme }) => isError && getErrorStyles(theme)}
`;
