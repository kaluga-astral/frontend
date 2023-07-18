import { styled } from '../styles';

import { Paper } from '../Paper';

export const PaperWrapper = styled(Paper)`
  width: 70%;
  padding: ${({ theme }) => theme.spacing(6)};
`;

