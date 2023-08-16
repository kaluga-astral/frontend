import React, {
  PropsWithChildren,
  forwardRef,
  useEffect,
  useState,
} from 'react';

import { TypographyProps } from '../Typography';
import { Collapse } from '../Collapse';
import { Chevron } from '../Chevron';
import { useForwardedRef } from '../hooks';

import {
  AccordionContentWrapper,
  AccordionHeader,
  AccordionTitle,
} from './styles';

export type AccordionProps = PropsWithChildren & {
  /**
   * @description Заголовок
   */
  title: string;
  /**
   * @description Элемент, отображаемый перед заголовком
   */
  startAdorment: React.ReactNode;
  /**
   * @description Управляет состоянием аккордеона
   */
  isOpen?: boolean;
  /**
   * @description Конфигурация Typography в title
   */
  titleProps?: TypographyProps;
};

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
  (
    { title, startAdorment, isOpen, titleProps, children }: AccordionProps,
    forwardedRef,
  ) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    const ref = useForwardedRef(forwardedRef);

    const handleClick = () => {
      setIsCollapsed((prev) => !prev);
    };

    useEffect(() => {
      setIsCollapsed(isOpen || false);
    }, [isOpen]);

    return (
      <div ref={ref}>
        <AccordionHeader container onClick={handleClick}>
          {startAdorment}
          <AccordionTitle {...titleProps}>{title}</AccordionTitle>
          <Chevron isActive={isCollapsed} />
        </AccordionHeader>
        <Collapse in={isCollapsed}>
          <AccordionContentWrapper>{children}</AccordionContentWrapper>
        </Collapse>
      </div>
    );
  },
);
