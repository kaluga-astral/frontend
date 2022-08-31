import {
  Ref,
  useCallback,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { debounce } from 'lodash-es';

export const useOverflowed = (forwardedRef?: Ref<HTMLElement>) => {
  const localRef = useRef<HTMLElement>(null);
  const ref =
    forwardedRef && typeof forwardedRef !== 'function'
      ? forwardedRef
      : localRef;

  const [isOverflowed, setOverflow] = useState(false);

  const handleResize = useCallback(
    debounce(
      ([{ target, contentRect }]: ResizeObserverEntry[]) =>
        setOverflow(contentRect.height < target.scrollHeight),
      500,
    ),
    [],
  );

  const resizeObserver = useMemo(() => new ResizeObserver(handleResize), []);

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
