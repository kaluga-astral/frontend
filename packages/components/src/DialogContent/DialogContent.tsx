import { type DialogContentProps as MuiDialogContentProps } from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';
import { useViewportType } from '../hooks/useViewportType';

import { StyledMuiDialogContent } from './styles';

export type DialogContentProps = WithoutEmotionSpecific<MuiDialogContentProps>;

export const DialogContent = (props: DialogContentProps) => {
  const { isMobile } = useViewportType();

  return <StyledMuiDialogContent isMobile={isMobile} {...props} />;
};
