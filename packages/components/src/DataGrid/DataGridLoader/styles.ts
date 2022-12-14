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

  /* Если в DataGrid передан Footer, нужно чтобы Backdrop не перекрывал его в состоянии loading, поэтому тут его высота вычитается из всей высоты бэкдропа */
  height: ${({ withFooter, footerHeight }) =>
    withFooter ? `calc(100% - ${footerHeight}px) ` : '100%'};

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
