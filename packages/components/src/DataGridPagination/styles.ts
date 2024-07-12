import { formControlClasses } from '@mui/material';

import { styled } from '../styles';
import { Typography } from '../Typography';

export const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: ${({ theme }) => theme.spacing(2)};
`;

export const Range = styled(Typography)`
  color: ${({ theme }) => theme.palette.grey['700']};
`;

export const RangeWrapper = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  align-items: center;

  .${formControlClasses.root} {
    flex-direction: unset;
  }
`;
