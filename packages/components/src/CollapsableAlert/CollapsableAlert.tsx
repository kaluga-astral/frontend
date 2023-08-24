import { Alert } from '@mui/material';
import {
  ErrorFillMd,
  InfoFillMd,
  SuccessFillMd,
  WarningFillMd,
} from '@astral/icons';
import { forwardRef } from 'react';

import { AlertProps } from '../Alert';
import { Accordion, AccordionProps } from '../Accordion';
import { Collapse } from '../Collapse';

import { CollapsableAlertActions } from './styles';

type CollapsableAlertProps = Pick<
  AlertProps,
  'severity' | 'actions' | 'display'
> &
  Omit<AccordionProps, 'startAdorment' | 'onChange' | 'summary'> & {
    title: AccordionProps['summary'];
    headerStartAdorment?: AccordionProps['startAdorment'];
    onExpandedChange?: AccordionProps['onChange'];
  };

export const CollapsableAlert = forwardRef<
  HTMLDivElement,
  CollapsableAlertProps
>(
  (
    {
      title,
      headerStartAdorment,
      severity = 'info',
      actions,
      display = true,
      children,
      isExpanded,
      onExpandedChange,
      ...restProps
    }: CollapsableAlertProps,
    ref,
  ) => {
    return (
      <Collapse in={display}>
        <Alert
          {...restProps}
          ref={ref}
          severity={severity}
          variant="filled"
          icon={headerStartAdorment}
          iconMapping={{
            info: <InfoFillMd />,
            error: <ErrorFillMd />,
            success: <SuccessFillMd />,
            warning: <WarningFillMd />,
          }}
        >
          <Accordion
            summary={title}
            isExpanded={isExpanded}
            onChange={onExpandedChange}
          >
            {children}
            <CollapsableAlertActions container>
              {actions}
            </CollapsableAlertActions>
          </Accordion>
        </Alert>
      </Collapse>
    );
  },
);
