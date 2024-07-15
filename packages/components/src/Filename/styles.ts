import { styled } from '../styles';
import { Typography } from '../Typography';

export const FileBaseName = styled.span`
  overflow: hidden;

  max-width: 100%;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledTypography = styled(Typography)`
  display: flex;
  justify-content: center;

  margin-right: ${({ theme }) => theme.spacing(3)};
`;
