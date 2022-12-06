import { styled } from '../styles';
import { Typography } from '../Typography';

export const StyledLabel = styled(Typography)`
  display: block;
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2, 4)};

  color: ${({ theme }) => theme.palette.grey[700]};
  line-height: ${({ theme }) => theme.typography.pxToRem(16)};
`;

export const StyledContentWrapper = styled.li`
  width: 100%;

  & > li {
    padding-left: ${({ theme }) => theme.spacing(7)};
  }
`;
