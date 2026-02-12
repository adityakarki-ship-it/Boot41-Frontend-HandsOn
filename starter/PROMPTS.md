# AI Prompts — Analytics Dashboard

Work through these 8 prompts in order. Each prompt is self-contained — copy-paste it into your AI assistant to get working code.

---

## Prompt 1: TypeScript Types

> **Goal:** Define all shared interfaces and types used across the project.
>
> **Context:** I'm building an Analytics Dashboard with React + TypeScript + MUI. I need a `src/types/index.ts` file with all shared type definitions.
>
> **Requirements — define these types:**
>
> - `StatCardData` — interface with: `id` (string), `title` (string), `value` (string | number), `change` (number — percentage), `changeLabel` (string), `icon` (string — MUI icon name)
> - `ChartCardData` — interface with: `id` (string), `title` (string), `description` (string), `type` (ChartType)
> - `ChartType` — union type: `'line' | 'bar' | 'pie' | 'area'`
> - `NavItem` — interface with: `label` (string), `path` (string), `icon` (string)
> - `AnalyticsRow` — interface with: `id` (string), `page` (string), `visitors` (number), `uniqueVisitors` (number), `bounceRate` (number), `avgDuration` (string)
> - `ThemeMode` — type: `'light' | 'dark'`
> - `ThemeContextType` — interface with: `mode` (ThemeMode), `toggleTheme` (function returning void)
> - `SidebarContextType` — interface with: `open` (boolean), `toggleSidebar` (function returning void)
> - `SettingsFormData` — interface with: `siteName` (string), `language` (string), `emailNotifications` (boolean), `pushNotifications` (boolean)
>
> **File:** `src/types/index.ts`
>
> **Acceptance criteria:** All types exported, no TypeScript errors, types use proper TS patterns (union types, optional fields where appropriate).

**Note:** This file is already provided. Read it to understand the types, then move to Prompt 2.

---

## Prompt 2: MUI Theme Setup

> **Goal:** Create a MUI theme configuration supporting light and dark modes.
>
> **Context:** I have a `ThemeMode` type (`'light' | 'dark'`) in `src/types/index.ts`. I need a theme factory function.
>
> **Requirements:**
>
> - Export a `getTheme(mode: ThemeMode)` function that returns a MUI theme via `createTheme`
> - **Palette:** primary blue (#1976d2), secondary purple (#9c27b0), with light/dark variants
> - **Background:** light mode → default #f5f5f5, paper #ffffff; dark mode → default #121212, paper #1e1e1e
> - **Typography:** Roboto font family, h4/h5/h6 fontWeight 600
> - **Shape:** borderRadius 12
> - **Component overrides:**
>   - MuiCard: borderRadius 12, subtle box-shadow (lighter in light mode, stronger in dark)
>   - MuiDrawer: no border-right, subtle box-shadow
>
> **File:** `src/theme/index.ts`
>
> **Acceptance criteria:** `getTheme('light')` and `getTheme('dark')` return valid MUI themes. Import `ThemeMode` from `../types`.

**Note:** This file is already provided. Read it to understand the theme config, then move to Prompt 3.

---

## Prompt 3: Sidebar Provider & Hook

> **Goal:** Build a React Context provider for sidebar open/collapse state and a custom hook to consume it.
>
> **Context:** I have `SidebarContextType` defined in `src/types/index.ts` with `{ open: boolean; toggleSidebar: () => void }`. I need a provider and hook.
>
> **Requirements for `src/providers/SidebarProvider.tsx`:**
>
> - Create `SidebarContext` using `createContext<SidebarContextType | undefined>(undefined)`
> - Export `SidebarProvider` component that:
>   - Uses `useState(true)` for the `open` state (sidebar starts open)
>   - Provides a `toggleSidebar` function that flips the boolean
>   - Wraps children with `SidebarContext.Provider`
>
> **Requirements for `src/hooks/useSidebar.ts`:**
>
> - Export `useSidebar()` that calls `useContext(SidebarContext)`
> - Throw an error if used outside the provider: `"useSidebar must be used within a SidebarProvider"`
> - Return the typed context value
>
> **Files:** `src/providers/SidebarProvider.tsx`, `src/hooks/useSidebar.ts`
>
> **Acceptance criteria:** Calling `useSidebar()` inside a `SidebarProvider` returns `{ open, toggleSidebar }`. Calling it outside throws a helpful error.

---

## Prompt 4: Theme Provider & Hook

> **Goal:** Build a Theme Context provider that wraps MUI's ThemeProvider and supports light/dark toggle, plus a custom hook.
>
> **Context:** I have `ThemeContextType` and `ThemeMode` in `src/types/index.ts`, and `getTheme()` in `src/theme/index.ts`. The `ThemeContext` is already created in the file.
>
> **Requirements for `src/providers/ThemeProvider.tsx`:**
>
> - Import `ThemeProvider as MuiThemeProvider` and `CssBaseline` from `@mui/material`
> - Import `getTheme` from `../theme`
> - Use `useState<ThemeMode>('light')` for the mode
> - `toggleTheme` switches between `'light'` and `'dark'`
> - Use `useMemo(() => getTheme(mode), [mode])` for the MUI theme object
> - Render: `ThemeContext.Provider` → `MuiThemeProvider` → `CssBaseline` → `{children}`
>
> **Requirements for `src/hooks/useTheme.ts`:**
>
> - Export `useThemeMode()` that calls `useContext(ThemeContext)`
> - Throw an error if used outside the provider: `"useThemeMode must be used within a ThemeProvider"`
> - Return the typed context value
>
> **Files:** `src/providers/ThemeProvider.tsx`, `src/hooks/useTheme.ts`
>
> **Acceptance criteria:** Theme toggle switches the entire app between light and dark mode. `CssBaseline` resets browser defaults.

---

## Prompt 5: Layout Components

> **Goal:** Build the app's layout shell — Sidebar (Drawer), Header (AppBar), and MainLayout.
>
> **Context:** I have `useSidebar()` and `useThemeMode()` hooks, `navItems` from `src/data/mockData.ts`, and React Router v6 set up. The layout wraps all pages.
>
> **Requirements for `src/components/Layout/Sidebar.tsx`:**
>
> - Use `useSidebar()` for `{ open, toggleSidebar }`
> - Use MUI `useTheme()` and `useMediaQuery(theme.breakpoints.down('md'))` for responsive behavior
> - Drawer width: 260px
> - **Two drawers:**
>   - Mobile (`xs`, `sm`): `variant="temporary"`, shown when `isMobile && open`, closes on nav click
>   - Desktop (`md`+): `variant="persistent"`, shown when `open`
> - **Drawer content:**
>   - Toolbar with Dashboard icon + "Analytics" title
>   - List of NavLinks from `navItems` array
>   - Use `NavLink` from react-router-dom as the component for `ListItemButton`
>   - Active link style: `bgcolor: 'primary.main'`, `color: 'white'`
> - Icon mapping: `'Dashboard' → <Dashboard />`, `'BarChart' → <BarChart />`, `'Settings' → <Settings />`
>
> **Requirements for `src/components/Layout/Header.tsx`:**
>
> - Use `useSidebar()` for `toggleSidebar` and `useThemeMode()` for `{ mode, toggleTheme }`
> - `AppBar` with `position="sticky"`, `color="default"`, `elevation={0}`, bottom border
> - Inside Toolbar:
>   - Menu IconButton (calls `toggleSidebar`)
>   - Breadcrumbs built from `useLocation().pathname` — "Home" link + path segments
>   - Theme toggle IconButton: show `<DarkMode />` in light mode, `<LightMode />` in dark mode
>
> **Requirements for `src/components/Layout/MainLayout.tsx`:**
>
> - Flex container with `minHeight: '100vh'`
> - Contains: `<Sidebar />`, then a main content area with `<Header />` and `<Outlet />` (from react-router-dom)
> - Main content area: `flexGrow: 1`, padding `{ xs: 2, sm: 3 }`
>
> **Files:** `src/components/Layout/Sidebar.tsx`, `src/components/Layout/Header.tsx`, `src/components/Layout/MainLayout.tsx`
>
> **Acceptance criteria:** Sidebar collapses on mobile, persists on desktop. Breadcrumbs update on navigation. Theme icon toggles correctly.

---

## Prompt 6: Reusable Components

> **Goal:** Build StatCard, ChartCard, and PageHeader components.
>
> **Context:** I have `StatCardData`, `ChartCardData` types from `src/types/index.ts`. These components are used across multiple pages.
>
> **Requirements for `src/components/common/PageHeader.tsx`:**
>
> - Props: `title: string`, `subtitle?: string`
> - Render Box with `mb: 3`, Typography `variant="h4"` for title, optional Typography `variant="body1" color="text.secondary"` for subtitle
>
> **Requirements for `src/components/Cards/StatCard.tsx`:**
>
> - Props: `data: StatCardData`
> - MUI Card with `height: '100%'`
> - Layout:
>   - Top: title (body2) left, icon (in a Box with `bgcolor: 'primary.main'`, white, rounded) right
>   - Middle: value as h4, fontWeight 700
>   - Bottom: TrendingUp/TrendingDown icon (based on positive/negative change), percentage text (green for positive, red for negative), changeLabel
> - Icon map: `{ People: <People/>, AttachMoney: <AttachMoney/>, ShoppingCart: <ShoppingCart/>, TrendingUp: <TrendingUp/> }`
>
> **Requirements for `src/components/Cards/ChartCard.tsx`:**
>
> - Props: `data: ChartCardData`
> - MUI Card with `height: '100%'`
> - Title (h6), description (body2, text.secondary)
> - Placeholder box: `height: 200`, `bgcolor: 'action.hover'`, `borderRadius: 2`, centered chart icon
> - Chart icon map by type: `{ line: <ShowChart/>, bar: <BarChart/>, pie: <PieChart/>, area: <StackedLineChart/> }`
>
> **Files:** `src/components/common/PageHeader.tsx`, `src/components/Cards/StatCard.tsx`, `src/components/Cards/ChartCard.tsx`
>
> **Acceptance criteria:** All three components render without errors, accept typed props, and display correct MUI styling.

---

## Prompt 7: Pages & Routing

> **Goal:** Build all three pages and set up React Router v6 routes.
>
> **Context:** I have all components built (PageHeader, StatCard, ChartCard, Layout), mock data in `src/data/mockData.ts`, and types defined. I need to build the pages and wire up routing.
>
> **Requirements for `src/pages/Dashboard/DashboardPage.tsx`:**
>
> - PageHeader: title "Dashboard", subtitle "Welcome back! Here's what's happening today."
> - Stat cards: MUI `Grid` container `spacing={3}`, map `statCards` → `Grid` items (`xs=12, sm=6, lg=3`) each containing `<StatCard />`
> - Overview section: Typography h5 "Overview", then `Grid` with `chartCards` → `Grid` items (`xs=12, md=6`) each containing `<ChartCard />`
>
> **Requirements for `src/pages/Analytics/AnalyticsPage.tsx`:**
>
> - PageHeader: title "Analytics", subtitle about data insights
> - Chart section: Grid with first 2 `chartCards` (`.slice(0, 2)`), `xs=12, md=6`
> - Data table: Typography h5 "Page Analytics", MUI `TableContainer` + `Paper` + `Table`
>   - Columns: Page, Visitors, Unique Visitors, Bounce Rate, Avg Duration
>   - Map `analyticsRows`, use `.toLocaleString()` for numbers, right-align numeric columns
>
> **Requirements for `src/pages/Settings/SettingsPage.tsx`:**
>
> - Use `useThemeMode()` hook for `{ mode, toggleTheme }`
> - Use `useState<SettingsFormData>` with defaults: `{ siteName: 'My Analytics Dashboard', language: 'English', emailNotifications: true, pushNotifications: false }`
> - Grid layout (`xs=12, md=6`):
>   - Left: "General" Card with TextField (siteName) and Select (language: English, Spanish, French, German, Japanese)
>   - Right: "Appearance" Card with dark mode Switch, "Notifications" Card with email/push Switches
> - "Save Changes" Button at bottom
>
> **Requirements for `src/routes/index.tsx`:**
>
> - Use `createBrowserRouter` from react-router-dom
> - Parent route `'/'` with `<MainLayout />` as element
> - Children: `{ index: true, element: <DashboardPage /> }`, `{ path: 'analytics', element: <AnalyticsPage /> }`, `{ path: 'settings', element: <SettingsPage /> }`
> - Export the router as `router`
>
> **Files:** `src/pages/Dashboard/DashboardPage.tsx`, `src/pages/Analytics/AnalyticsPage.tsx`, `src/pages/Settings/SettingsPage.tsx`, `src/routes/index.tsx`
>
> **Acceptance criteria:** All three routes work (`/`, `/analytics`, `/settings`). Pages display correct data from mock data. Dashboard grid is responsive.

---

## Prompt 8: App Integration

> **Goal:** Wire everything together in App.tsx and main.tsx.
>
> **Context:** I have the router defined in `src/routes/index.tsx`, ThemeProvider in `src/providers/ThemeProvider.tsx`, and SidebarProvider in `src/providers/SidebarProvider.tsx`. I need to connect them.
>
> **Requirements for `src/App.tsx`:**
>
> - Import `RouterProvider` from `react-router-dom` and `router` from `./routes`
> - Render `<RouterProvider router={router} />`
> - Remove the placeholder content
>
> **Requirements for `src/main.tsx`:**
>
> - Import `ThemeProvider` from `./providers/ThemeProvider`
> - Import `SidebarProvider` from `./providers/SidebarProvider`
> - Wrap App in this order: `StrictMode` → `ThemeProvider` → `SidebarProvider` → `App`
> - ThemeProvider must be outermost (after StrictMode) so the MUI theme is available to all components
> - Remove any CSS imports (`index.css`, `App.css`) — all styling is via MUI
>
> **Files:** `src/App.tsx`, `src/main.tsx`
>
> **Acceptance criteria:**
> - App renders with sidebar, header, and dashboard page
> - Navigation between all 3 routes works
> - Theme toggle switches light ↔ dark
> - Sidebar collapses/expands
> - No console errors
> - `npm run build` succeeds with zero TypeScript errors
