import { Checkbox, css } from '@mui/material';

import { styled } from '../styles';
import type { Theme } from '../theme';

type CheckboxStyledProps = {
  isError?: boolean;
};

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
})<CheckboxStyledProps>`
  padding: ${({ theme }) => theme.spacing(2)};

  color: ${({ theme }) => theme.palette.background.element};

  border-radius: unset;

  &:hover {
    color: ${({ theme }) => theme.palette.grey[100]};
  }

  & .MuiSvgIcon-border {
    fill: ${({ theme }) => theme.palette.grey[300]};
  }

  & > svg {
    width: calc(16 / 14 * 1rem);
    height: calc(16 / 14 * 1rem);
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
