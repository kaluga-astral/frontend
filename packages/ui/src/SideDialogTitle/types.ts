import {
  ModalProps,
  DialogTitleProps as MuiDialogTitleProps,
} from '@mui/material';

export type DialogTitleProps = MuiDialogTitleProps & {
  onClose?: ModalProps['onClose'];
};
