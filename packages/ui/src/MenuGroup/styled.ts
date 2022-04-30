import { styled } from '../styles';
import { Typography } from '../Typography';

export const StyledLabel = styled(Typography)`
  display: block;
  padding: ${({ theme }) => theme.spacing(2, 4)};

  color: ${({ theme }) => theme.palette.grey[700]};
  line-height: ${({ theme }) => theme.typography.pxToRem(16)};
`;

export const StyledContentWrapper = styled.div`
  & > li {
    padding-left: ${({ theme }) => theme.spacing(7)};
  }
`;
