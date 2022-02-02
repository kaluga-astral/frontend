import { Radio } from '@mui/material';
import styled from '@emotion/styled';

import { RadioProps } from './types';

export const StyledRadio = styled(Radio)<RadioProps>`
  padding: 5px;
  border-radius: unset;
  color: ${({ theme }) => theme.palette.background.default};

  &:hover {
    color: ${({ theme }) => theme.palette.grey[100]};
  }

  &:not(Mui-disabled, .Mui-checked, .MuiRadio-indeterminate) > svg > rect {
    stroke: ${({ theme }) => theme.palette.grey[300]};
  }

  &.Mui-disabled:not(.Mui-checked, .MuiRadio-indeterminate) {
    color: ${({ theme }) => theme.palette.grey[200]};
    & > svg > rect {
      stroke: currentColor;
    }
  }

  &.Mui-checked,
  &.MuiRadio-indeterminate {
    color: ${({ theme }) => theme.palette.primary.main};
    &:hover {
      color: ${({ theme }) => theme.palette.primary[700]};
    }
    &.Mui-disabled {
      color: ${({ theme }) => theme.palette.grey[500]};
    }
    & > svg > path {
      fill: ${({ theme }) => theme.palette.common.white};
    }
  }
`;
