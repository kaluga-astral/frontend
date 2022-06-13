import { useMemo } from 'react';
import { AlertTitle } from '@mui/material';
import {
  ErrorFillMd,
  InfoFillMd,
  SuccessFillMd,
  WarningFillMd,
} from '@astral/icons';

import { Button } from '../Button';

import { AlertProps } from './types';
import { StyledAlert } from './styled';

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
      return <InfoFillMd color="inherit" />;
    }

    if (severity === 'success') {
      return <SuccessFillMd color="inherit" />;
    }

    if (severity === 'warning') {
      return <WarningFillMd color="inherit" />;
    }

    if (severity === 'error') {
      return <ErrorFillMd color="inherit" />;
    }

    return <InfoFillMd />;
  }, [severity]);

  return (
    <StyledAlert severity={severity} icon={icon} onClose={onClose} {...props}>
      {title && <AlertTitle>{title}</AlertTitle>}
      {message}
      {buttonLinkText && (
        <Button variant="link" size="small" onClick={onLinkHandleClick}>
          {buttonLinkText}
        </Button>
      )}
    </StyledAlert>
  );
};

export default Alert;
