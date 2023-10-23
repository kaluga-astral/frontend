import { Ref, RefObject, useEffect, useRef, useState } from 'react';
type UseCollabsibleResult = {
  ref: RefObject<HTMLElement>;
  isCollapsable: boolean;
  isOpenCollapse: boolean;
  currentHeight: string;
  toggleCollapse: () => void;
};

/**
 * @description Хук используется для подсчета scrollHeight и сlientHeigh.
 * Компоненту  в пропсах задается rowsCount, который попадает  в стили и устанавливает значение -webkit-line-clamp = rowsCount;
 * Затем мы сравниевам scrollHeight и сlientHeigh,
 * если scrollHeight > , то значение isCollapsable = true.
 * Это значит что компонент переполнен и нужно отобразить кнопку управления состоянием (показать/скрыть) isOpenCollapse.
 * Когда isOpenCollapse = true значение -webkit-line-clamp = "none";
 * Компоненту устанавливается высота равная его scrollHeight
 * сlientHeigh сохраняется как initialHeight и при закрытии устанавливается компоненту для плавной анимации раскрытия/скрытия
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
  const [initialHeight, setInitialHeight] = useState('');
  const [currentHeight, setCurrentHeight] = useState('auto');

  const [isOpenCollapse, setIsOpenCollapse] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const node = ref.current;
      const clientH = node.getBoundingClientRect().height;
      const scrollH = node.scrollHeight;

      setInitialHeight(clientH + 'px');

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
        return setCurrentHeight(scrollH + 'px');
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
