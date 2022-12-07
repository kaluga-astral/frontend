import { PropsWithChildren, useRef } from 'react';

import { UseAwayClickListenerOptions, useAwayClickEffect } from '../hooks';

export type AwayClickListenerProps = Omit<UseAwayClickListenerOptions, 'ref'>;

export const AwayClickListener = ({
  onAwayClick,
  preventBubbling,
  isActive,
  children,
}: PropsWithChildren<AwayClickListenerProps>) => {
  const ref = useRef<HTMLDivElement>(null);

  useAwayClickEffect({ ref, onAwayClick, preventBubbling, isActive });

  return <div ref={ref}>{children}</div>;
};
