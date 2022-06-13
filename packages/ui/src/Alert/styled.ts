import { Alert, alertClasses } from '@mui/material';

import { styled } from '../styles';
import { Theme } from '../theme';

import { AlertStates } from './constants';
import { AlertProps, AlertState } from './types';

export type StyledAlertProps = Omit<AlertProps, 'severity' | 'message'> & {
  severity: AlertState;
};

export type StyledAlertThemeProps = {
  severity?: AlertState;
  theme: Theme;
};

export const setBackgroundColor = ({
  theme,
  severity,
}: StyledAlertThemeProps): string => {
  if (severity === AlertStates.INFO) {
    return theme.palette.primary['100'];
  }

  if (severity === AlertStates.SUCCESS) {
    return theme.palette.green['100'];
  }

  if (severity === AlertStates.WARNING) {
    return theme.palette.yellow['100'];
  }

  if (severity === AlertStates.ERROR) {
    return theme.palette.red['100'];
  }

  return theme.palette.primary['100'];
};

export const setIconColor = ({
  theme,
  severity,
}: StyledAlertThemeProps): string => {
  if (severity === AlertStates.INFO) {
    return theme.palette.primary['800'];
  }

  if (severity === AlertStates.SUCCESS) {
    return theme.palette.green['800'];
  }

  if (severity === AlertStates.WARNING) {
    return theme.palette.yellow['800'];
  }

  if (severity === AlertStates.ERROR) {
    return theme.palette.red['800'];
  }

  return theme.palette.primary['800'];
};

export const StyledAlert = styled(Alert, {
  shouldForwardProp: (prop) => prop !== 'severity',
})<StyledAlertProps>`
  &.${alertClasses.root} {
    background-color: ${setBackgroundColor};
    padding: ${({ theme }) => theme.spacing(4)};
  }

  &.${alertClasses.icon} {
    color: ${({ theme }) => theme.palette.grey['500']};
  }

  &.${alertClasses.message} {
    padding-top: ${({ theme }) => theme.spacing(2)};
    padding-bottom: 0;
  }

  button {
    padding: 0;
  }
`;
