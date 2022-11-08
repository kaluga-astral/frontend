import { styled } from '../../styles';

import { Icon } from './Icon';

export const ActiveIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.primary.main};
`;

export const DefaultIcon = styled(Icon)`
  color: ${({ theme }) => theme.palette.grey[400]};
`;
