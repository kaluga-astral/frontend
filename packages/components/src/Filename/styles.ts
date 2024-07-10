import { styled } from '../styles';
import { Typography } from '../Typography';

export const StyledTypography = styled(Typography)`
  overflow: hidden;

  max-width: 100%;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  margin-right: ${({ theme }) => theme.spacing(3)};
`;

export const Extension = styled.p`
  margin: 0;
`;
