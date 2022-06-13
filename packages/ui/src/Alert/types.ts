import { AlertProps as MuiAlertProps } from '@mui/material';

import { AlertStates } from './constants';

export type AlertState = `${AlertStates}`;

export type AlertProps = Omit<
  MuiAlertProps,
  'severity' | 'variant' | 'icon' | 'message'
> & {
  severity: AlertState;
  message: string;
  title?: string;
  buttonLinkText?: React.ReactNode;
  onClose: () => void;
  onLinkHandleClick?: () => void;
};
