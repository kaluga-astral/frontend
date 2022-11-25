import { styled } from '../styles';
import { Typography } from '../Typography';

export const Subtitle = styled(Typography)`
  &::before {
    padding: ${({ theme }) => theme.spacing(0, 4)};

    color: ${({ theme }) => theme.palette.grey[500]};

    content: '|';
  }
`;
