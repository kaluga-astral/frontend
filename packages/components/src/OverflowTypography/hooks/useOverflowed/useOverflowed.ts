import { type Ref, useLayoutEffect, useRef, useState } from 'react';

import { debounce } from '../../../utils';

export const useOverflowed = (forwardedRef?: Ref<HTMLElement>) => {
  const localRef = useRef<HTMLElement>(null);
  const ref =
    forwardedRef && typeof forwardedRef !== 'function'
      ? forwardedRef
      : localRef;

  const [isOverflowed, setOverflow] = useState(false);

  useLayoutEffect(() => {
    if (ref?.current) {
      const handleResize = debounce(
        ([{ target, contentRect }]: ResizeObserverEntry[]) => {
          // сверка высоты дом ноды и высоты скролл контейнера, если скролл больше, то значит компонент переполнен контентом
          const isScrollHeightBigger =
            Math.round(contentRect.height) < target.scrollHeight;

          // сверка ширины дом ноды и ширины скролл контейнера, если скролл больше, то значит компонент переполнен контентом
          const isScrollWidthBigger =
            target.scrollWidth > Math.round(contentRect.width);

          setOverflow(isScrollHeightBigger || isScrollWidthBigger);
        },
        { waitMs: 500 },
      );

      const resizeObserver = new ResizeObserver(handleResize.call);
      const node = ref.current;

      resizeObserver.observe(node);

      return () => resizeObserver.unobserve(node);
    }

    return;
  }, [ref.current]);

  return { isOverflowed, ref };
};
