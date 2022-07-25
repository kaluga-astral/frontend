import { Ref, useCallback, useLayoutEffect, useRef, useState } from 'react';
import debounce from 'lodash-es/debounce';

type SetOverflowable = {
  setOverflow?: (entry: ResizeObserverEntry) => void;
};

type MutatedHTMLElement = HTMLElement & SetOverflowable;

const isTargetMutated = (
  target: Element,
): target is HTMLElement & Required<SetOverflowable> =>
  Boolean((target as MutatedHTMLElement)?.setOverflow);

const checkOnOverflow = (entry: ResizeObserverEntry) => {
  if (isTargetMutated(entry.target)) {
    entry.target.setOverflow(entry);
  }
};

const resizeCb = (entries: ResizeObserverEntry[]) =>
  entries.forEach(checkOnOverflow);

const resizeObserver = new ResizeObserver(resizeCb);

export const useOverflowed = (forwardedRef?: Ref<MutatedHTMLElement>) => {
  const localRef = useRef<MutatedHTMLElement>(null);
  const ref =
    forwardedRef && typeof forwardedRef !== 'function'
      ? forwardedRef
      : localRef;

  const [isOverflowed, setOverflow] = useState(false);

  const debouncedSetOverflow = useCallback(
    debounce(
      ({ target, contentRect }: ResizeObserverEntry) =>
        setOverflow(contentRect.height < target.scrollHeight),
      500,
    ),
    [],
  );

  useLayoutEffect(() => {
    if (ref?.current) {
      const node = ref.current;

      node.setOverflow = debouncedSetOverflow;
      resizeObserver.observe(node);

      return () => resizeObserver.unobserve(node);
    }

    return;
  }, [ref.current]);

  return { isOverflowed, ref: ref as Ref<HTMLElement> };
};
