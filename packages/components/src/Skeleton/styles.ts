import { Skeleton, skeletonClasses } from '@mui/material';

import { rgba } from '../utils/colors';
import { styled } from '../styles';

export const StyledSkeleton = styled(Skeleton)`
  /* stylelint-disable-next-line */
  background-color: ${({ theme }) => rgba(theme.palette.grey[900], 0.12)};

  /* TODO Заменить на значения из темы в рамках https://track.astral.ru/soft/browse/UIKIT-1400 */
  &.${skeletonClasses.text} {
    border-radius: 4px;
  }

  &.${skeletonClasses.rounded} {
    border-radius: 4px;
  }
`;
