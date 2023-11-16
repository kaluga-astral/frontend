import { NextOutlineMd } from '@astral/icons';

import { styled } from '../../styles';

export const ArrowConnector = styled(NextOutlineMd)`
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  color: ${({ theme }) => theme.palette.grey[400]};
`;
