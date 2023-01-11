import { ReactNode, createContext } from 'react';

export type SidebarContextProps = {
  collapsedIn: boolean;
};

export type SidebarProviderProps = Partial<SidebarContextProps> & {
  children: ReactNode;
};

export const SidebarContext = createContext<SidebarContextProps>({
  collapsedIn: false,
});

export const SidebarProvider = ({
  children,
  collapsedIn = true,
}: SidebarProviderProps) => {
  return (
    <SidebarContext.Provider value={{ collapsedIn }}>
      {children}
    </SidebarContext.Provider>
  );
};
