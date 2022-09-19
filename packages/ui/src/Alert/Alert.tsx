import { AlertTitle, AlertProps as MuiAlertProps } from '@mui/material';
import {
  ErrorFillMd,
  InfoFillMd,
  SuccessFillMd,
  WarningFillMd,
} from '@astral/icons';
import { ReactNode } from 'react';

import { Typography } from '../Typography';
import { Grid } from '../Grid';
import { Collapse } from '../Collapse';

import { StyledAlert } from './styles';

export type AlertProps = Omit<
  MuiAlertProps,
  'variant' | 'action' | 'color' | 'iconMapping'
> & {
  /**
   * @example <Alert title="Заголовок">Сообщение</Alert>
   * Заголовок
   */
  title?: string;
  /**
   * @example <Alert actions={
   *   <>
   *     <button>действие 1</button>
   *     <button>действие 2</button>
   *   </>
   * }>Сообщение</Alert>
   * Используется для отображения набора действий
   */
  actions?: ReactNode;
  /**
   * @example <Alert display={false}>Сообщение</Alert>
   * Флаг для отображения/скрытия компонента Alert
   */
  display?: boolean;
};

export const Alert = ({
  children,
  title,
  closeText = 'Скрыть',
  display = true,
  actions,
  onClose,
  ...props
}: AlertProps) => {
  return (
    <Collapse in={display}>
      <StyledAlert
        {...props}
        closeText={closeText}
        variant="filled"
        onClose={onClose}
        iconMapping={{
          info: <InfoFillMd />,
          error: <ErrorFillMd />,
          success: <SuccessFillMd />,
          warning: <WarningFillMd />,
        }}
      >
        {title && (
          <AlertTitle>
            <Typography variant="h5">{title}</Typography>
          </AlertTitle>
        )}
        <Typography gutterBottom={Boolean(actions)}>{children}</Typography>
        <Grid
          container
          spacing={4}
          autoFlow="column"
          justifyContent="flex-start"
        >
          {actions}
        </Grid>
      </StyledAlert>
    </Collapse>
  );
};
