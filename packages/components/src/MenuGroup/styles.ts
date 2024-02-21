import { styled } from '../styles';
import { Typography } from '../Typography';

export const Label = styled(Typography)`
  display: block;

  width: 100%;
  padding: ${({ theme }) => theme.spacing(2, 4)};

  line-height: ${({ theme }) => theme.typography.pxToRem(16)};
  color: ${({ theme }) => theme.palette.grey[700]};
`;

export const Content = styled.li`
  width: 100%;

  & ul {
    padding: 0;

    list-style: none;
  }
`;
