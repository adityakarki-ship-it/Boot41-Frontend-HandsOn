import { useContext } from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

// TODO: Implement the useThemeMode custom hook
// Requirements:
// - Call useContext(ThemeContext)
// - If context is undefined, throw an Error: 'useThemeMode must be used within a ThemeProvider'
// - Return the context value
export function useThemeMode() {
  const context = useContext(ThemeContext);
  // TODO: Add guard clause and return context
  return context as NonNullable<typeof context>;
}
