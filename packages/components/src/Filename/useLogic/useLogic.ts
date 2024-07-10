import { type Ref, useLayoutEffect, useRef, useState } from 'react';
import { debounce } from 'remeda';

import { type FileNameProps } from '../Filename';

import { truncateString } from './utils';

export const useLogic = (
  children: string,
  forwardedRef: Ref<HTMLElement>,
  props: Omit<FileNameProps, 'children' | 'tooltipProps'>,
) => {
  const [isOverflowed, setIsOverflowed] = useState<boolean>(false);
  const localRef = useRef<HTMLElement>(null);
  const ref =
    forwardedRef && typeof forwardedRef !== 'function'
      ? forwardedRef
      : localRef;

  const handleResize = debounce(
    ([{ target, contentRect }]: ResizeObserverEntry[]) => {
      // сверка ширины дом ноды и ширины скролл контейнера, если скролл больше, то значит компонент переполнен контентом
      const isScrollWidthBigger =
        target.scrollWidth > Math.round(contentRect.width);
      const isScrollHeightBigger =
        target.scrollHeight > Math.round(contentRect.height);

      setIsOverflowed(isScrollWidthBigger || isScrollHeightBigger);
    },
    { waitMs: 500 },
  );

  useLayoutEffect(() => {
    if (ref?.current) {
      const resizeObserver = new ResizeObserver(handleResize.call);
      const node = ref.current;

      resizeObserver.observe(node);

      return () => resizeObserver.unobserve(node);
    }

    return;
  }, [children, ref.current]);

  const { baseName, ext } = truncateString(children);

  const typographyProps = {
    ...props,
    ref,
    children: baseName,
  };

  return { typographyProps, isOverflowed, ext };
};
