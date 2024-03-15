import { useEffect, useRef } from 'react';

export type UseIntervaResult = number | undefined;

export type UseIntervalHook = (
  callback: () => void,
  ms: number,
) => UseIntervaResult;

// TODO: Рассмотреть вынос хука в hooks
export const useInterval: UseIntervalHook = (callback, ms) => {
  const intervalInstance = useRef<number | undefined>(undefined);

  useEffect(() => {
    intervalInstance.current = window.setInterval(callback, ms);

    return () => clearInterval(intervalInstance.current);
  }, [ms, callback]);

  return intervalInstance?.current;
};
