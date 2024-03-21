import { Rating, ratingClasses } from '@mui/material';

import { styled } from '../styles';

export const StyledRating = styled(Rating)`
  color: ${({ theme }) => theme.palette.yellow[600]};

  & .${ratingClasses.icon} {
    transform: scale(1.2);

    padding: 0 14px;

    font-size: ${({ theme }) => theme.typography.pxToRem(42)};
    line-height: 1;
  }

  & .${ratingClasses.iconEmpty} {
    transform: scale(1);

    color: rgb(178 178 178 / 70%);

    opacity: 0.8;
  }
`;
