import { Radio, css } from '@mui/material';

import { styled } from '../styles';
import type { Theme } from '../theme';

import { CHECKED_ICON_CLASSES, DEFAULT_ICON_CLASSES } from './constants';

type StyledRadioProps = {
  isError?: boolean;
};

const getErrorStyles = (theme: Theme) => css`
  &.MuiRadio-root:not(.Mui-disabled) {
    color: ${theme.palette.red[800]};

    &:hover {
      & > svg {
        color: ${theme.palette.red[700]};
      }
    }
  }
`;

export const StyledRadio = styled(Radio, {
  shouldForwardProp: (prop) => prop !== 'isError',
})<StyledRadioProps>`
  padding: 5px;

  color: ${({ theme }) => theme.palette.grey[300]};

  border-radius: unset;

  & > svg > .${DEFAULT_ICON_CLASSES.innerCircle} {
    fill: ${({ theme }) => theme.palette.common.white};
  }

  &:hover {
    background: none;

    & > svg > .${DEFAULT_ICON_CLASSES.innerCircle} {
      fill: ${({ theme }) => theme.palette.grey[100]};
    }
  }

  &.Mui-disabled:not(.Mui-checked) {
    color: ${({ theme }) => theme.palette.grey[200]};

    & > svg > .${DEFAULT_ICON_CLASSES.innerCircle} {
      fill: ${({ theme }) => theme.palette.grey[200]};
    }
  }

  &.Mui-checked {
    color: ${({ theme }) => theme.palette.primary.main};

    &:hover {
      & > svg {
        color: ${({ theme }) => theme.palette.primary[700]};
      }
    }

    &.Mui-disabled {
      color: ${({ theme }) => theme.palette.grey[400]};
    }

    & > svg > .${CHECKED_ICON_CLASSES.innerCircle} {
      fill: ${({ theme }) => theme.palette.common.white};
    }
  }

  ${({ isError, theme }) => isError && getErrorStyles(theme)}
`;
