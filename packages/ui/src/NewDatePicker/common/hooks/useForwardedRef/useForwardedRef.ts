import { ForwardedRef, useRef } from 'react';

export const useForwardedRef = <T>(forwardedRef: ForwardedRef<T>) => {
  const localRef = useRef<T>(null);

  return forwardedRef && typeof forwardedRef !== 'function'
    ? forwardedRef
    : localRef;
};
