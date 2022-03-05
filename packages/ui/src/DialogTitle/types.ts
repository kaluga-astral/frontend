import { DialogTitleProps as MuiDialogTitleProps } from '@mui/material';

export type DialogTitleProps = MuiDialogTitleProps & {
  onClose: () => void;
};
