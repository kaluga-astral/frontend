import { ForwardedRef, useImperativeHandle, useRef } from 'react';

export const useForwardedRef = <T>(forwardedRef: ForwardedRef<T>) => {
  const localRef = useRef<T>(null);

  useImperativeHandle(forwardedRef, () => localRef.current!, [forwardedRef]);

  return localRef;
};
