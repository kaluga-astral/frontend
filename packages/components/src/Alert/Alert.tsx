import {
  Alert as AlertMui,
  AlertTitle,
  type AlertProps as MuiAlertProps,
} from '@mui/material';
import {
  ErrorFillMd,
  InfoFillMd,
  SuccessFillMd,
  WarningFillMd,
} from '@astral/icons';
import { type ReactNode } from 'react';

import { Typography } from '../Typography';
import { LegacyGrid } from '../LegacyGrid';
import { Collapse } from '../Collapse';
import { type WithoutEmotionSpecific } from '../types';

import { type AlertSeverity } from './types';

export type AlertProps = Omit<
  WithoutEmotionSpecific<MuiAlertProps>,
  'severity' | 'variant' | 'action' | 'color' | 'iconMapping'
> & {
  /**
   * Тип тоста
   */
  severity?: `${AlertSeverity}`;
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

export { AlertSeverity } from './types';

export const Alert = ({
  children,
  title,
  closeText = 'Скрыть',
  display = true,
  actions,
  onClose,
  ...props
}: AlertProps) => {
  const { severity = 'info', ...restProps } = props;

  return (
    <Collapse in={display}>
      <AlertMui
        {...restProps}
        severity={severity}
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
        <LegacyGrid
          container
          spacing={4}
          autoFlow="column"
          justifyContent="flex-start"
        >
          {actions}
        </LegacyGrid>
      </AlertMui>
    </Collapse>
  );
};
