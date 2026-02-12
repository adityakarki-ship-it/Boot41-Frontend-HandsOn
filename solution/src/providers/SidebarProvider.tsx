import { createContext, useState, type ReactNode } from 'react';
import type { SidebarContextType } from '../types';

export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);

export function SidebarProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(true);

  const toggleSidebar = () => setOpen((prev) => !prev);

  return (
    <SidebarContext.Provider value={{ open, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}
