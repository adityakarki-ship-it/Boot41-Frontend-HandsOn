import { createContext, type ReactNode } from 'react';
import type { SidebarContextType } from '../types';

// TODO: Create the SidebarContext using createContext
// Hint: The context should hold SidebarContextType | undefined
export const SidebarContext = createContext<SidebarContextType | undefined>(
  undefined,
);

// TODO: Implement the SidebarProvider component
// Requirements:
// - Accept { children: ReactNode } as props
// - Use useState to manage an `open` boolean (default: true)
// - Create a `toggleSidebar` function that flips the `open` state
// - Wrap children with SidebarContext.Provider passing { open, toggleSidebar }
export function SidebarProvider({ children }: { children: ReactNode }) {
  // TODO: Add state and toggle function

  return (
    // TODO: Wrap children with SidebarContext.Provider
    <>{children}</>
  );
}
