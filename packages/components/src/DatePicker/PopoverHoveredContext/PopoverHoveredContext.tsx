import { type PropsWithChildren, createContext } from 'react';

type PopoverHoveredContextValue = { popoverHovered: boolean };

/**
 * Контекст, позволяющий хранить значение hovered поповера календаря и использовать его внутри компонентов
 */
export const PopoverHoveredContext = createContext<PopoverHoveredContextValue>({
  popoverHovered: false,
});

export const PopoverHoveredContextProvider = ({
  popoverHovered = false,
  children,
}: PropsWithChildren<PopoverHoveredContextValue>) => (
  <PopoverHoveredContext.Provider value={{ popoverHovered: popoverHovered }}>
    {children}
  </PopoverHoveredContext.Provider>
);
