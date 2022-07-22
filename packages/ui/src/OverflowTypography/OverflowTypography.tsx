import {
  PropsWithChildren,
  forwardRef,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import debounce from 'lodash-es/debounce';

import { TypographyProps } from '../Typography';
import { TooltipProps as BasicTooltipProps, Tooltip } from '../Tooltip';

import { OverflowTypographyWrapper } from './styles';

type TooltipProps = Omit<BasicTooltipProps, 'ref'>;

export type OverflowedProps = {
  /**
   * @example <OverflowTypography rowsCount={2} />
   * @default 1
   * @description опорная единица по которой определяется максимиально отображаемое колличество строк
   */
  rowsCount?: number;
};

type TooltipCustomizable = {
  /**
   * @example <OverflowTypography tooltipProps={{placement: 'top-start'}} />
   * @description способ кастомизировать тултип при необходимости
   */
  tooltipProps?: Omit<TooltipProps, 'children'>;
};

export type OverflowedElementProps = OverflowedProps &
  TooltipCustomizable &
  TypographyProps;

export type OverflowedTypographyProps =
  PropsWithChildren<OverflowedElementProps>;

export const DEFAULT_ROWS_COUNT = 1;

type SetOverflowable = {
  setOverflow?: (cond: boolean) => void;
};

type MutatedHTMLElement = HTMLElement & SetOverflowable;

const isTargetMutated = (
  x: Element,
): x is HTMLElement & Required<SetOverflowable> =>
  Boolean(x && (x as MutatedHTMLElement).setOverflow);

const checkOnOverflow = ({ target, contentRect }: ResizeObserverEntry) => {
  if (!isTargetMutated(target)) {
    return;
  }

  target.setOverflow(contentRect.height < target.scrollHeight);
};

const debouncedResizeCb = debounce(
  (entrys: ResizeObserverEntry[]) => entrys.forEach(checkOnOverflow),
  500,
);

const resizeObserver = new ResizeObserver(debouncedResizeCb);

export const OverflowTypography = forwardRef<
  MutatedHTMLElement,
  OverflowedTypographyProps
>(
  (
    { tooltipProps, children, rowsCount = DEFAULT_ROWS_COUNT, ...props },
    forwardedRef,
  ) => {
    const localRef = useRef<MutatedHTMLElement>(null);
    const ref =
      forwardedRef && typeof forwardedRef !== 'function'
        ? forwardedRef
        : localRef;

    const [isLongerThanLimit, setOverflow] = useState(false);

    useLayoutEffect(() => {
      if (ref?.current) {
        const node = ref.current;

        node.setOverflow = setOverflow;
        resizeObserver.observe(node);

        return () => resizeObserver.unobserve(node);
      }

      return;
    }, [ref.current]);

    const typographyProps = {
      ...props,
      ref,
      children,
      rowsCount,
    };

    if (isLongerThanLimit) {
      return (
        <Tooltip
          title={(typeof children === 'string' && children) || ''}
          disableInteractive
          {...tooltipProps}
        >
          <OverflowTypographyWrapper {...typographyProps} />
        </Tooltip>
      );
    }

    return <OverflowTypographyWrapper {...typographyProps} />;
  },
);
