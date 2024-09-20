import { styled } from '../styles';
import { Typography } from '../Typography';

export const Wrapper = styled.div`
  max-width: 380px;
  padding: ${({ theme }) => theme.spacing(4)};
`;

export const StyledTypography = styled(Typography)`
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const Actions = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(3)};
  justify-content: end;
`;
