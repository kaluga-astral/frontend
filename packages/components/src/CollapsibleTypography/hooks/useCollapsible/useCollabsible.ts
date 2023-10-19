import { Ref, useEffect, useRef, useState } from 'react';

export const useCollabsible = (forwardedRef?: Ref<HTMLElement>) => {
  const localRef = useRef<HTMLElement>(null);
  const ref =
    forwardedRef && typeof forwardedRef !== 'function'
      ? forwardedRef
      : localRef;
  const [isCollapsControll, setIsCollapsControll] = useState(true);
  const [initialHight, setInitialHeight] = useState('');
  const [currentHeight, setCurrentHeight] = useState('auto');

  const [isOpenCollapse, setIsOpenCollaps] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const node = ref.current;
      const clientH = node.getBoundingClientRect().height;
      const scrollH = node.scrollHeight;

      setInitialHeight(clientH + 'px');

      if (scrollH > clientH) {
        return setIsCollapsControll(true);
      }

      setIsCollapsControll(false);
    }
  }, [ref]);

  useEffect(() => {
    if (ref.current) {
      const node = ref.current;

      const scrollH = node.scrollHeight;

      if (isOpenCollapse) {
        return setCurrentHeight(scrollH + 'px');
      }

      setCurrentHeight(initialHight);
    }
  }, [initialHight, isOpenCollapse, ref]);

  return {
    ref,
    isCollapsControll,
    isOpenCollapse,
    setIsOpenCollaps,
    currentHeight,
  };
};
