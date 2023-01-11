import { ReactNode, createContext } from 'react';

export type SidebarContextProps = {
  isOpen?: boolean;
};

export type SidebarProviderProps = Partial<SidebarContextProps> & {
  children: ReactNode;
};

export const SidebarContext = createContext<SidebarContextProps>({
  isOpen: false,
});

export const SidebarProvider = ({ children, isOpen }: SidebarProviderProps) => {
  return (
    <SidebarContext.Provider value={{ isOpen }}>
      {children}
    </SidebarContext.Provider>
  );
};
