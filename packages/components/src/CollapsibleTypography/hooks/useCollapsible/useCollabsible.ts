import { Ref, useEffect, useRef, useState } from 'react';

export const useCollabsible = (forwardedRef?: Ref<HTMLElement>) => {
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
