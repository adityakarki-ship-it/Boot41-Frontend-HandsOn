// TODO: Wrap App with providers
//
// Requirements:
// - Import ThemeProvider from './providers/ThemeProvider'
// - Import SidebarProvider from './providers/SidebarProvider'
// - Wrap <App /> with: ThemeProvider → SidebarProvider → App
//   (ThemeProvider must be outermost so MUI theme is available everywhere)

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* TODO: Wrap App with ThemeProvider and SidebarProvider */}
    <App />
  </StrictMode>,
);
