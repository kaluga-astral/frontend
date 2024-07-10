import { type Ref, useLayoutEffect, useRef, useState } from 'react';
// TODO Разместить в пакете utils
// Необходимо решить в рамках https://track.astral.ru/soft/browse/UIKIT-1526
import throttle from 'throttleit';

import { type FileNameProps } from '../Filename';

import { truncateString } from './utils';

export const useLogic = (
  children: string,
  forwardedRef: Ref<HTMLElement>,
  props: Omit<FileNameProps, 'children' | 'tooltipProps'>,
) => {
  const [truncatedFilename, setTruncatedFilename] = useState<string>(children);
  const [isTruncated, setIsTruncated] = useState<boolean>(false);
  const [lastWidth, setLastWidth] = useState<number>();
  const localRef = useRef<HTMLElement>(null);
  const ref =
    forwardedRef && typeof forwardedRef !== 'function'
      ? forwardedRef
      : localRef;

  const updateTruncatedChildren = () => {
    let maxLength = children.length;
    const element = ref.current!;

    while (element.scrollWidth > element.clientWidth && maxLength > 0) {
      maxLength--;
      element.textContent = truncateString(children, maxLength);
    }

    const truncated = truncateString(children, maxLength);

    setTruncatedFilename(truncated);
    element.textContent = children;
    setIsTruncated(truncated !== children);
  };

  const handleResize = ([{ target, contentRect }]: ResizeObserverEntry[]) => {
    const currentWidth = Math.round(contentRect.width);
    // сверка ширины дом ноды и ширины скролл контейнера, если скролл больше, то значит компонент переполнен контентом
    const isScrollWidthBigger =
      target.scrollWidth > Math.round(contentRect.width);
    const isScrollHeightBigger =
      target.scrollHeight > Math.round(contentRect.height);

    if (isScrollWidthBigger || isScrollHeightBigger) {
      updateTruncatedChildren();
    }

    if (lastWidth !== undefined && currentWidth > lastWidth) {
      updateTruncatedChildren();
    }

    setLastWidth(currentWidth);
  };

  useLayoutEffect(() => {
    if (ref?.current) {
      const throttleFilename = throttle(handleResize, 20);

      const resizeObserver = new ResizeObserver(throttleFilename);
      const node = ref.current;

      resizeObserver.observe(node);

      return () => resizeObserver.unobserve(node);
    }

    return;
  }, [children, ref.current, lastWidth]);

  const typographyProps = {
    ...props,
    ref,
    children: truncatedFilename,
  };

  return { typographyProps, isTruncated };
};
