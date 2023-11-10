import { Children, cloneElement, useRef } from 'react';

import type { UseClickAwayListenerOptions } from '../hooks';
import { useClickAwayEffect } from '../hooks';

export type ClickAwayListenerProps = Omit<
  UseClickAwayListenerOptions,
  'ref' | 'isActive'
> & {
  children: JSX.Element;
  isActive?: boolean;
};

/**
 * @description компонент предоставляющий обертку для работы с хуком useClickAwayEffect
 */
export const ClickAwayListener = ({
  onClickAway,
  preventBubbling,
  isActive = true,
  children,
}: ClickAwayListenerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useClickAwayEffect({ ref, onClickAway, preventBubbling, isActive });

  return Children.only(cloneElement(children, { ref }));
};
