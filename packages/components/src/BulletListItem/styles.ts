import { DotOutlineSm } from '@astral/icons';

import { styled } from '../styles';
import { Typography } from '../Typography';

export const Root = styled('div')`
  display: flex;
  gap: ${({ theme }) => theme.spacing(1)};
  align-items: center;
`;

export const Icon = styled(DotOutlineSm)`
  align-self: start;
`;

export const ListItem = styled(Typography)`
  list-style-type: none;
`;
