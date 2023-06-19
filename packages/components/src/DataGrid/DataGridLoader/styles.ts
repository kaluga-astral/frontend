import { LinearProgress } from '@mui/material';

import { Divider } from '../../Divider';
import { styled } from '../../styles';

export const Backdrop = styled.div`
  position: absolute;
  top: 0;

  width: 100%;
  height: 100%;

  background-color: ${({ theme }) => theme.palette.background.element};
  opacity: 0.3;
`;

export const StyledDivider = styled(Divider)`
  border-width: 1px;
`;

export const LoaderWrapper = styled.div`
  height: 2px;
`;

export const StyledLinearProgress = styled(LinearProgress)`
  height: 2px;
`;
