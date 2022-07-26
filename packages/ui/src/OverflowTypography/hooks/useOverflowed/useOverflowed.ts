import {
  Ref,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import debounce from 'lodash-es/debounce';

export const useOverflowed = (forwardedRef?: Ref<HTMLElement>) => {
  const localRef = useRef<HTMLElement>(null);
  const ref =
    forwardedRef && typeof forwardedRef !== 'function'
      ? forwardedRef
      : localRef;

  const [isOverflowed, setOverflow] = useState(false);

  const debouncedSetOverflow = useCallback(
    debounce(
      ([{ target, contentRect }]: ResizeObserverEntry[]) =>
        setOverflow(contentRect.height < target.scrollHeight),
      500,
    ),
    [],
  );

  const resizeObserver = useMemo(
    () => new ResizeObserver(debouncedSetOverflow),
    [],
  );

  useLayoutEffect(() => {
    if (ref?.current) {
      const node = ref.current;

      resizeObserver.observe(node);

      return () => resizeObserver.unobserve(node);
    }

    return;
  }, [ref.current]);

  return { isOverflowed, ref };
};
