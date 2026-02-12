import { createContext, type ReactNode } from 'react';
import type { ThemeContextType } from '../types';

// TODO: Create the ThemeContext using createContext
// Hint: The context should hold ThemeContextType | undefined
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);

// TODO: Implement the ThemeProvider component
// Requirements:
// - Accept { children: ReactNode } as props
// - Use useState<ThemeMode> to manage 'light' | 'dark' mode (default: 'light')
// - Create a `toggleTheme` function that switches between 'light' and 'dark'
// - Use useMemo to create the MUI theme with getTheme(mode)
// - Wrap children with ThemeContext.Provider, then MUI's ThemeProvider, then CssBaseline
//
// Imports you'll need:
//   import { useState, useMemo } from 'react';
//   import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
//   import { getTheme } from '../theme';
export function ThemeProvider({ children }: { children: ReactNode }) {
  // TODO: Add state, toggle function, and memoized theme

  return (
    // TODO: Wrap with ThemeContext.Provider → MuiThemeProvider → CssBaseline → children
    <>{children}</>
  );
}
