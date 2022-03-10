import { DialogTitleProps as MuiDialogTitleProps } from '@mui/material';

export type DialogTitleProps = MuiDialogTitleProps & {
  showCloseButton?: boolean;
  onClose?: () => void;
};
