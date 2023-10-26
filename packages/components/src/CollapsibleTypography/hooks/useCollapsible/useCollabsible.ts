import {
  CSSProperties,
  Ref,
  RefObject,
  useEffect,
  useRef,
  useState,
} from 'react';
type UseCollabsibleResult = {
  ref: RefObject<HTMLElement>;
  isCollapsable: boolean;
  isOpenCollapse: boolean;
  currentHeight: CSSProperties['height'];
  toggleCollapse: () => void;
};

/**
 * @description Хук используется для управления логикой открытия/скрытия
 *
 */
export const useCollabsible = (
  forwardedRef?: Ref<HTMLElement>,
): UseCollabsibleResult => {
  const localRef = useRef<HTMLElement>(null);
  const ref =
    forwardedRef && typeof forwardedRef !== 'function'
      ? forwardedRef
      : localRef;
  const [isCollapsable, setIsCollapsable] = useState(true);
  const [initialHeight, setInitialHeight] =
    useState<CSSProperties['height']>('0');
  const [currentHeight, setCurrentHeight] =
    useState<CSSProperties['height']>('auto');

  const [isOpenCollapse, setIsOpenCollapse] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const node = ref.current;
      const clientH = node.getBoundingClientRect().height;
      const scrollH = node.scrollHeight;

      setInitialHeight(`${clientH}px`);

      if (scrollH > clientH) {
        return setIsCollapsable(true);
      }

      setIsCollapsable(false);
    }
  }, [ref]);

  useEffect(() => {
    if (ref.current) {
      const node = ref.current;

      const scrollH = node.scrollHeight;

      if (isOpenCollapse) {
        return setCurrentHeight(`${scrollH}px`);
      }

      setCurrentHeight(initialHeight);
    }
  }, [initialHeight, isOpenCollapse, ref]);

  const toggleCollapse = () => {
    setIsOpenCollapse(!isOpenCollapse);
  };

  return {
    ref,
    isCollapsable,
    isOpenCollapse,
    currentHeight,
    toggleCollapse,
  };
};
