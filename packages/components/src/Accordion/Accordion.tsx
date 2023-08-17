import React, { PropsWithChildren, forwardRef, useState } from 'react';

import { Collapse } from '../Collapse';
import { Chevron } from '../Chevron';

import {
  AccordionContentWrapper,
  AccordionHeader,
  AccordionSummary,
} from './styles';

export type AccordionProps = PropsWithChildren<{
  /**
   *  Заголовок
   */
  summary: React.ReactElement | string;
  /**
   *  Элемент, отображаемый перед заголовком
   */
  startAdorment?: React.ReactNode;
  /**
   *  Управляет состоянием аккордеона
   */
  isExpanded?: boolean;

  /**
   *  Обработчик, вызываемый при клике по хедеру
   */
  onChange?: (
    isExpanded: boolean,
    event: React.MouseEvent<HTMLElement, MouseEvent>,
  ) => void;
}>;

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    { summary, startAdorment, isExpanded, onChange, children }: AccordionProps,
    forwardedRef,
  ) => {
    const [isUncontrolledExpanded, setIsUncontrolledExpanded] = useState(false);

    const isControlled = typeof isExpanded === 'boolean';

    const actualIsExpanded = isControlled ? isExpanded : isUncontrolledExpanded;

    const hasStartAdorment = Boolean(startAdorment);

    const handleClickHeader = (
      event: React.MouseEvent<HTMLElement, MouseEvent>,
    ) => {
      if (isControlled) {
        onChange?.(!isExpanded, event);
      } else {
        const newValue = !isUncontrolledExpanded;

        setIsUncontrolledExpanded(newValue);
        onChange?.(newValue, event);
      }
    };

    const SummaryWrapper =
      typeof summary === 'string' ? AccordionSummary : React.Fragment;

    return (
      <div ref={forwardedRef}>
        <AccordionHeader
          role="button"
          onClick={handleClickHeader}
          withStartAdorment={hasStartAdorment}
        >
          {startAdorment}
          <SummaryWrapper>{summary}</SummaryWrapper>
          <Chevron isActive={actualIsExpanded} />
        </AccordionHeader>
        <Collapse in={actualIsExpanded}>
          <AccordionContentWrapper withStartAdorment={hasStartAdorment}>
            {children}
          </AccordionContentWrapper>
        </Collapse>
      </div>
    );
  },
);
