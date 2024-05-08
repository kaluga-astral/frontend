import { useEffect, useState } from 'react';

export const useHover = (element?: Element) => {
  const [isHovered, setHover] = useState(false);

  const handleMouseEnter = () => setHover(true);
  const handleMouseLeave = () => setHover(false);

  useEffect(() => {
    if (!element) {
      return undefined;
    }

    element.addEventListener('mouseenter', handleMouseEnter);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter);
      element.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [element]);

  return { isHovered };
};
