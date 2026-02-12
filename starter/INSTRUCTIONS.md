# Instructions — Analytics Dashboard

## Build Order

Follow this order to avoid dependency issues. Each step builds on the previous one.

### Phase 1: Foundations (provided)
These files are already complete — read them to understand the data shapes and theme.

1. **`src/types/index.ts`** — All shared TypeScript interfaces and types
2. **`src/data/mockData.ts`** — Mock dashboard data (stat cards, chart cards, nav items, analytics rows)
3. **`src/theme/index.ts`** — MUI theme configuration (light + dark palettes)

### Phase 2: State Management
4. **`src/providers/SidebarProvider.tsx`** — Context for sidebar open/collapse state
5. **`src/hooks/useSidebar.ts`** — Custom hook to consume sidebar context
6. **`src/providers/ThemeProvider.tsx`** — Context wrapping MUI ThemeProvider for light/dark toggle
7. **`src/hooks/useTheme.ts`** — Custom hook to consume theme context

### Phase 3: Layout Shell
8. **`src/components/Layout/Sidebar.tsx`** — MUI Drawer with navigation links
9. **`src/components/Layout/Header.tsx`** — MUI AppBar with breadcrumbs and theme toggle
10. **`src/components/Layout/MainLayout.tsx`** — Flex layout shell (sidebar + header + content outlet)

### Phase 4: Reusable Components
11. **`src/components/common/PageHeader.tsx`** — Page title + subtitle component
12. **`src/components/Cards/StatCard.tsx`** — KPI stat card
13. **`src/components/Cards/ChartCard.tsx`** — Chart placeholder card

### Phase 5: Pages
14. **`src/pages/Dashboard/DashboardPage.tsx`** — Stat cards grid + chart cards
15. **`src/pages/Analytics/AnalyticsPage.tsx`** — Charts + data table
16. **`src/pages/Settings/SettingsPage.tsx`** — Settings form with theme toggle

### Phase 6: Wiring
17. **`src/routes/index.tsx`** — React Router v6 route definitions
18. **`src/App.tsx`** — Connect RouterProvider
19. **`src/main.tsx`** — Wrap App with ThemeProvider and SidebarProvider

---

## Architecture Guide

### Folder Structure

```
src/
├── components/     # Reusable UI components (no business logic)
│   ├── Cards/      # Card components (StatCard, ChartCard)
│   ├── Layout/     # Layout shell (Sidebar, Header, MainLayout)
│   └── common/     # Shared components (PageHeader)
├── pages/          # Page-level components (one per route)
├── providers/      # React Context providers
├── hooks/          # Custom hooks (one per context)
├── types/          # TypeScript interfaces and types
├── data/           # Mock data
├── theme/          # MUI theme configuration
└── routes/         # React Router route definitions
```

### Key Patterns

**Feature-based folders** — Group by feature (Dashboard, Analytics, Settings), not by file type.

**Provider + Hook pattern** — Each context has a Provider component and a custom hook:
- `SidebarProvider` → `useSidebar()`
- `ThemeProvider` → `useThemeMode()`

**MUI sx prop** — All styling uses MUI's `sx` prop. No CSS files, no SCSS.

**Typed props** — Every component has a typed props interface using TypeScript.

---

## Package.json Walkthrough

| Package | Purpose |
|---------|---------|
| `react`, `react-dom` | Core React library |
| `react-router-dom` | Client-side routing (v6) |
| `@mui/material` | MUI component library |
| `@mui/icons-material` | MUI icon set |
| `@emotion/react` | CSS-in-JS engine (MUI dependency) |
| `@emotion/styled` | Styled components (MUI dependency) |
| `typescript` | TypeScript compiler |
| `vite` | Build tool and dev server |

---

## Figma Dev-Mode Tips

When working with design tokens from Figma:

1. **Inspect mode** — Select a component in Figma and check the Inspect panel for CSS properties
2. **Spacing** — Figma uses pixels; convert to MUI spacing units (1 unit = 8px). E.g., 24px → `spacing(3)` or `sx={{ p: 3 }}`
3. **Colors** — Match Figma hex colors to your MUI theme palette (`primary.main`, `text.secondary`, etc.)
4. **Typography** — Map Figma font sizes to MUI variants (`h4`, `body1`, `caption`, etc.)
5. **Border radius** — Figma border-radius maps to MUI `borderRadius` in the theme or `sx={{ borderRadius: 2 }}`
6. **Shadows** — Use MUI's built-in elevation system (`elevation={2}`) instead of copying box-shadow values

---

## Tips

- Run `npm run dev` frequently to check your progress
- TypeScript errors will show in the terminal — fix them before moving on
- Use the browser DevTools responsive mode to test at 1440px, 1024px, 768px, and 480px
- Compare your result with the `solution/` project when stuck
