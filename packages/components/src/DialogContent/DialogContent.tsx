import {
  type DialogContentProps as MuiDialogContentProps,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { type WithoutEmotionSpecific } from '../types';

import { MuiDialogContentStyled } from './styles';

export type DialogContentProps = WithoutEmotionSpecific<MuiDialogContentProps>;

export const DialogContent = (props: DialogContentProps) => {
  // TODO: заменить на useViewportType

  const theme = useTheme();

  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return <MuiDialogContentStyled isMobile={isMobile} {...props} />;
};
