import {
  type CSSProperties,
  type Ref,
  type RefObject,
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
 * Хук используется для управления логикой открытия/скрытия текста
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
      /**
       * Eсли isOpenCollapse=false то в стилях webkit-line-clamp = rowsCount
       * Получаем клиентскую высоту, она будет равна количеству строк умноженной на высоту строки
       */
      const clientH = node.getBoundingClientRect().height;
      const scrollH = node.scrollHeight;

      setInitialHeight(`${clientH}px`);

      if (scrollH > clientH) {
        // если scrollHeight > clientHeight то  компонент переполнен, значит нужна кнопка для управлением открытия/скрытия текста
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
        // Показываем скрытую часть текста
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
