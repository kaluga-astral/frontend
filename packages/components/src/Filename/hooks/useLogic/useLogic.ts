import { type RefObject, useEffect, useState } from 'react';

import { truncateString } from '../../utils';

export const useLogic = (children: string, ref: RefObject<HTMLElement>) => {
  const [truncatedChildren, setTruncatedChildren] = useState<string>(children);

  const updateTruncatedChildren = () => {
    if (ref.current) {
      let maxLength = children.length;
      const element = ref.current;

      while (element.scrollWidth > element.clientWidth && maxLength > 0) {
        maxLength--;
        element.textContent = truncateString(children, maxLength);
      }

      setTruncatedChildren(truncateString(children, maxLength));
      element.textContent = children; // Reset text content to original children
    }
  };

  useEffect(() => {
    updateTruncatedChildren();
  }, [children, ref]);

  useEffect(() => {
    const handleResize = () => updateTruncatedChildren();

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, [children, ref]);

  return truncatedChildren;
};
