import { Radio } from '@mui/material';

import { styled } from '../styles';

import { RadioProps } from './types';

export const StyledRadio = styled(Radio)<RadioProps>`
  padding: 5px;

  color: ${({ theme }) => theme.palette.background.default};

  border-radius: unset;

  &:hover {
    background: none;

    & > svg {
      color: ${({ theme }) => theme.palette.grey[200]};
    }
  }

  &.Mui-disabled:not(.Mui-checked) {
    color: ${({ theme }) => theme.palette.grey[200]};

    & > svg {
      color: ${({ theme }) => theme.palette.grey[300]};
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
      color: ${({ theme }) => theme.palette.grey[500]};
    }

    & > svg > path {
      fill: ${({ theme }) => theme.palette.common.white};
    }
  }
`;
