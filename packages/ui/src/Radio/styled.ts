import { Radio } from '@mui/material';
import styled from '@emotion/styled';

import { RadioProps } from './types';

export const StyledRadio = styled(Radio)<RadioProps>`
  padding: 5px;
  border-radius: unset;
  color: ${({ theme }) => theme.palette.background.default};

  &:hover {
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
