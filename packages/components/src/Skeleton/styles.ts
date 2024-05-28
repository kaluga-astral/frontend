import { Skeleton, skeletonClasses } from '@mui/material';

import { rgba } from '../utils/colors';
import { styled } from '../styles';

export const StyledSkeleton = styled(Skeleton)`
  background-color: ${({ theme }) => rgb(theme.palette.grey[900] 0.12)};

  &.${skeletonClasses.text} {
    border-radius: 4px;
  }

  &.${skeletonClasses.rounded} {
    border-radius: 4px;
  }
`;
