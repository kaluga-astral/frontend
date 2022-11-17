import { LinearProgress } from '@mui/material';

import { Divider } from '../../Divider';
import { styled } from '../../styles';

export const StyledDivider = styled(Divider)`
  border-width: 1px;
`;

export const LoaderWrapper = styled.div`
  height: 2px;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  height: 2px;
`;
