import { styled } from '../../styles';

import { Value } from './Value';

export const ValueWrapper = styled(Value)`
  margin-left: ${({ theme }) => theme.spacing(2)};
`;
