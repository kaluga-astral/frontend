import { type Ref, useLayoutEffect, useState } from 'react';
import { debounce } from 'remeda';

import { useOverflowed } from '../../OverflowTypography/hooks';
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
  const { ref } = useOverflowed(forwardedRef);

  const updateTruncatedChildren = () => {
    if (ref.current) {
      let maxLength = children.length;
      const element = ref.current;

      while (element.scrollWidth > element.clientWidth && maxLength > 0) {
        maxLength--;
        element.textContent = truncateString(children, maxLength);
      }

      const truncated = truncateString(children, maxLength);

      setTruncatedFilename(truncated);
      element.textContent = children;
      setIsTruncated(truncated !== children);
    }
  };

  useLayoutEffect(() => {
    if (ref?.current) {
      const handleResize = debounce(
        ([{ target, contentRect }]: ResizeObserverEntry[]) => {
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
        },
        { waitMs: 500 },
      );

      const resizeObserver = new ResizeObserver(handleResize.call);
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
