import { useMemo } from 'react';
import { AlertTitle, Alert as MuiAlert } from '@mui/material';
import {
  ErrorFillMd,
  InfoFillMd,
  SuccessFillMd,
  WarningFillMd,
} from '@astral/icons';

import { Button } from '../Button';

import { AlertProps } from './types';

export const Alert = ({
  severity,
  message,
  title,
  onClose,
  buttonLinkText,
  onLinkHandleClick,
  ...props
}: AlertProps) => {
  const icon = useMemo(() => {
    if (severity === 'info') {
      return <InfoFillMd />;
    }

    if (severity === 'success') {
      return <SuccessFillMd />;
    }

    if (severity === 'warning') {
      return <WarningFillMd />;
    }

    if (severity === 'error') {
      return <ErrorFillMd />;
    }

    return <InfoFillMd />;
  }, [severity]);

  return (
    <MuiAlert
      severity={severity}
      icon={icon}
      onClose={onClose}
      color={severity}
      {...props}
    >
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
      {buttonLinkText && (
        <Button variant="link" size="small" onClick={onLinkHandleClick}>
          {buttonLinkText}
        </Button>
      )}
    </MuiAlert>
  );
};

export default Alert;
