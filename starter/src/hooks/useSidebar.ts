import { useContext } from 'react';
import { SidebarContext } from '../providers/SidebarProvider';

// TODO: Implement the useSidebar custom hook
// Requirements:
// - Call useContext(SidebarContext)
// - If context is undefined, throw an Error: 'useSidebar must be used within a SidebarProvider'
// - Return the context value
export function useSidebar() {
  const context = useContext(SidebarContext);
  // TODO: Add guard clause and return context
  return context as NonNullable<typeof context>;
}
