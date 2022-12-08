import { HTMLAttributes, PropsWithChildren, useRef } from 'react';

import { UseAwayClickListenerOptions, useAwayClickEffect } from '../hooks';

export type AwayClickListenerProps = PropsWithChildren<
  Omit<UseAwayClickListenerOptions, 'ref'> &
    Pick<HTMLAttributes<HTMLDivElement>, 'className'>
>;

/**
 * @description компонент предоставляющий обертку для работы с хуком useAwayClickEffect
 */
export const AwayClickListener = ({
  onAwayClick,
  preventBubbling,
  isActive,
  children,
  className,
}: AwayClickListenerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useAwayClickEffect({ ref, onAwayClick, preventBubbling, isActive });

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
};
