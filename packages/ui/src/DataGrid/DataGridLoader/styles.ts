import { LinearProgress } from '@mui/material';

import { Divider } from '../../Divider';
import { styled } from '../../styles';

type BackdropProps = {
  withFooter: boolean;
  footerHeight: number;
};

export const Backdrop = styled.div<BackdropProps>`
  position: absolute;
  top: 0;

  width: 100%;
  height: ${({ withFooter, footerHeight }) =>
    withFooter ? `calc(100% - ${footerHeight}px) ` : '100%'};

  background-color: ${({ theme }) => theme.palette.grey['100']};
  opacity: 0.6;
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
