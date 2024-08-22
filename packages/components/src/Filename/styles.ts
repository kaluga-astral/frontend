import { styled } from '../styles';
import { Typography } from '../Typography';

export const FileBaseName = styled.span`
  overflow: hidden;

  max-width: 100%;

  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) => !['$align'].includes(prop),
})<{ $align: string }>`
  display: flex;
  justify-content: ${({ $align }) => $align};
`;
