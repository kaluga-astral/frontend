import { ForwardedRef, useImperativeHandle, useRef } from 'react';

/**
 * @description хук позволяет использовать опциональный реф пришедший сверху, т.к. ForwardedRef может являться колбэком, это может подходить не для всех компонентов, яркий пример MaskField
 */
export const useForwardedRef = <T>(forwardedRef: ForwardedRef<T>) => {
  const localRef = useRef<T>(null);

  useImperativeHandle(forwardedRef, () => localRef.current!, [forwardedRef]);

  return localRef;
};
