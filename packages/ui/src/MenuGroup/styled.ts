import { styled } from '../styles';
import { Typography } from '../Typography';

export const StyledLabel = styled(Typography)`
  display: block;
  padding: ${({ theme }) => theme.spacing(4)};

  color: ${({ theme }) => theme.palette.grey[700]};
`;

export const StyledContentWrapper = styled.div`
  & > li {
    padding-left: ${({ theme }) => theme.spacing(7)};
  }
`;
