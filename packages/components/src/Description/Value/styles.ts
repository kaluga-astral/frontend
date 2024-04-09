import { CopyOutlineSm } from '@astral/icons';

import { styled } from '../../styles';
import { Typography, type TypographyProps } from '../../Typography';

import { type ValueProps } from './Value';

export const StyledCopyIcon = styled(CopyOutlineSm)`
  font-size: ${({ theme }) => theme.spacing(4)};

  fill: ${(props) => props.color};
`;

type StyledTextProps = TypographyProps & {
  $copyPosition?: ValueProps['copyPosition'];
};

export const StyledText = styled(Typography)`
  cursor: pointer;

  display: flex;
  flex-direction: ${({ $copyPosition }: StyledTextProps) =>
    $copyPosition === 'left' ? 'row-reverse' : 'row'};
  column-gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;

  &:hover {
    text-decoration: underline;
  }
`;
