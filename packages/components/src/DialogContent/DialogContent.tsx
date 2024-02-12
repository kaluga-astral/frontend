import { type DialogContentProps as MuiDialogContentProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';
import { useViewportType } from '../hooks/useViewportType';

import { MuiDialogContentStyled } from './styles';

export type DialogContentProps = WithoutEmotionSpecific<MuiDialogContentProps>;

export const DialogContent = (props: DialogContentProps) => {
  const { isMobile } = useViewportType();

  return <MuiDialogContentStyled isMobile={isMobile} {...props} />;
};
