import { styled } from '../../styles';
import { Typography } from '../../Typography';
import { CopyTypography } from '../../CopyTypography';

type StyledTypographyProps = {
  $leader?: boolean;
  $canCopy?: boolean;
  $direction: string;
};

type StyledCopyTypographyProps = {
  $leader?: boolean;
  $direction: string;
};

export const StyledTypography = styled(Typography, {
  shouldForwardProp: (prop) =>
    !['$canCopy', '$leader', '$direction'].includes(prop),
})<StyledTypographyProps>`
  cursor: ${({ $canCopy }) => ($canCopy ? 'pointer' : 'default')};

  overflow: hidden;

  hyphens: auto;
  text-align: ${({ $leader }) => ($leader ? 'right' : 'left')};
  overflow-wrap: break-word;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    text-align: ${({ $direction }) => ($direction != 'row' ? 'left' : 'right')};
  }

  &:hover {
    text-decoration: ${({ $canCopy }) => ($canCopy ? 'underline' : 'none')};
  }
`;

export const StyledCopyTypography = styled(CopyTypography, {
  shouldForwardProp: (prop) => !['$leader', '$direction'].includes(prop),
})<StyledCopyTypographyProps>`
  display: unset;

  hyphens: auto;
  text-align: ${({ $leader }) => ($leader ? 'right' : 'left')};
  overflow-wrap: break-word;

  ${({ theme }) => theme.breakpoints.down('sm')} {
    text-align: ${({ $direction }) => ($direction != 'row' ? 'left' : 'right')};
  }

  & > svg {
    margin-bottom: ${({ theme }) => theme.spacing(-1)};
  }
`;

export const Wrapper = styled.dd`
  overflow: hidden;

  margin: 0;
`;
