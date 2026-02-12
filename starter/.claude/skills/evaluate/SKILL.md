---
name: evaluate
description: Evaluate an intern's Analytics Dashboard implementation against the rubric
disable-model-invocation: true
---

# Evaluate Intern's Analytics Dashboard

You are an automated code evaluator for the Analytics Dashboard hands-on project. Your job is to thoroughly evaluate the intern's implementation, score it against a rubric, and produce a detailed report.

## Evaluation Process

Follow these steps **exactly in order**:

### Step 1: Compilation Check

Run `npm run build` from the project root. Record:
- Whether it succeeds or fails
- Any TypeScript errors (list them)
- Any warnings

### Step 2: Remaining TODOs

Search the entire `src/` directory for any remaining `TODO` comments. List every file that still has TODOs — these are incomplete implementations.

### Step 3: Per-Feature Deep Review

Read each file listed below and evaluate against the criteria. For each feature, assign a score.

---

## Rubric (100 points total)

### Feature 1: Sidebar Provider & Hook (10 pts)

**Files:** `src/providers/SidebarProvider.tsx`, `src/hooks/useSidebar.ts`

| Criteria | Points |
|----------|--------|
| `SidebarProvider` uses `useState` to manage `open` boolean | 2 |
| `toggleSidebar` correctly flips the state | 2 |
| Children wrapped with `SidebarContext.Provider` passing `{ open, toggleSidebar }` | 3 |
| `useSidebar` hook throws descriptive error when used outside provider | 2 |
| `useSidebar` returns typed context value | 1 |

### Feature 2: Theme Provider & Hook (12 pts)

**Files:** `src/providers/ThemeProvider.tsx`, `src/hooks/useTheme.ts`

| Criteria | Points |
|----------|--------|
| Uses `useState<ThemeMode>` with `'light'` default | 2 |
| `toggleTheme` switches between `'light'` and `'dark'` | 2 |
| Uses `useMemo` with `getTheme(mode)` to create the MUI theme | 2 |
| Wraps children with `ThemeContext.Provider` | 2 |
| Wraps with MUI `ThemeProvider` using the memoized theme | 2 |
| Includes `CssBaseline` | 1 |
| `useThemeMode` hook throws error outside provider | 1 |

### Feature 3: Sidebar Component (12 pts)

**File:** `src/components/Layout/Sidebar.tsx`

| Criteria | Points |
|----------|--------|
| Uses `useSidebar()` hook for state | 1 |
| Uses `useMediaQuery` for responsive mobile detection | 2 |
| Mobile drawer: `variant="temporary"`, conditionally shown | 2 |
| Desktop drawer: `variant="persistent"`, conditionally shown | 2 |
| Renders `navItems` as `NavLink` components from react-router-dom | 2 |
| Active link has distinct visual style (bgcolor/color change) | 2 |
| Drawer has logo/title in toolbar area | 1 |

### Feature 4: Header Component (10 pts)

**File:** `src/components/Layout/Header.tsx`

| Criteria | Points |
|----------|--------|
| Uses `AppBar` with sticky position | 1 |
| Menu `IconButton` calls `toggleSidebar` | 2 |
| Breadcrumbs rendered from current route path | 3 |
| Theme toggle `IconButton` switches between light/dark icons | 2 |
| Uses `useThemeMode()` and `useSidebar()` hooks | 2 |

### Feature 5: MainLayout Component (8 pts)

**File:** `src/components/Layout/MainLayout.tsx`

| Criteria | Points |
|----------|--------|
| Flex container with `minHeight: '100vh'` | 2 |
| Contains `<Sidebar />` component | 2 |
| Contains `<Header />` component | 2 |
| Uses `<Outlet />` from react-router-dom for child route content | 2 |

### Feature 6: Reusable Components (12 pts)

**Files:** `src/components/common/PageHeader.tsx`, `src/components/Cards/StatCard.tsx`, `src/components/Cards/ChartCard.tsx`

**PageHeader (3 pts):**

| Criteria | Points |
|----------|--------|
| Accepts `title` and optional `subtitle` props | 1 |
| Renders title as Typography h4 | 1 |
| Conditionally renders subtitle | 1 |

**StatCard (5 pts):**

| Criteria | Points |
|----------|--------|
| Accepts `data: StatCardData` prop | 1 |
| Displays title, value, change percentage, and changeLabel | 2 |
| Shows trending up/down icon based on positive/negative change | 1 |
| Change text colored green (positive) or red (negative) | 1 |

**ChartCard (4 pts):**

| Criteria | Points |
|----------|--------|
| Accepts `data: ChartCardData` prop | 1 |
| Displays title and description | 1 |
| Renders placeholder box with chart type icon | 2 |

### Feature 7: Pages (20 pts)

**DashboardPage (8 pts)** — `src/pages/Dashboard/DashboardPage.tsx`:

| Criteria | Points |
|----------|--------|
| Uses `PageHeader` with title and subtitle | 1 |
| Renders stat cards in MUI `Grid` | 2 |
| Grid is responsive (`xs=12, sm=6, lg=3`) | 2 |
| Renders chart cards in a separate grid section | 2 |
| Uses data from `mockData.ts` | 1 |

**AnalyticsPage (7 pts)** — `src/pages/Analytics/AnalyticsPage.tsx`:

| Criteria | Points |
|----------|--------|
| Uses `PageHeader` | 1 |
| Renders chart cards (subset) in grid | 2 |
| Renders data table with `TableContainer`, `Table`, `TableHead`, `TableBody` | 2 |
| Table has correct columns (Page, Visitors, Unique Visitors, Bounce Rate, Avg Duration) | 1 |
| Uses `analyticsRows` from mock data | 1 |

**SettingsPage (5 pts)** — `src/pages/Settings/SettingsPage.tsx`:

| Criteria | Points |
|----------|--------|
| Uses `useThemeMode()` for dark mode toggle | 1 |
| Has form state with `useState` | 1 |
| Renders text fields (siteName, language select) | 1 |
| Renders switches (dark mode, email notifications, push notifications) | 1 |
| Has a save button | 1 |

### Feature 8: Routing & App Integration (16 pts)

**Routes (8 pts)** — `src/routes/index.tsx`:

| Criteria | Points |
|----------|--------|
| Uses `createBrowserRouter` | 2 |
| Parent route `/` uses `MainLayout` as element | 2 |
| Index route renders `DashboardPage` | 1 |
| `/analytics` route renders `AnalyticsPage` | 1 |
| `/settings` route renders `SettingsPage` | 1 |
| Router exported as named export | 1 |

**App.tsx (4 pts)** — `src/App.tsx`:

| Criteria | Points |
|----------|--------|
| Imports `RouterProvider` from react-router-dom | 1 |
| Imports `router` from `./routes` | 1 |
| Renders `<RouterProvider router={router} />` | 2 |

**main.tsx (4 pts)** — `src/main.tsx`:

| Criteria | Points |
|----------|--------|
| Imports and wraps with `ThemeProvider` | 1.5 |
| Imports and wraps with `SidebarProvider` | 1.5 |
| `ThemeProvider` is outermost (before `SidebarProvider`) | 1 |

---

## Output Format

After evaluating, produce a report in **exactly** this format:

```
# Evaluation Report — Analytics Dashboard

## Build Status
- **Compilation:** PASS / FAIL
- **TypeScript Errors:** <count>
- **Remaining TODOs:** <count> (list files)

## Scores

| # | Feature                        | Score | Max | Status |
|---|--------------------------------|-------|-----|--------|
| 1 | Sidebar Provider & Hook        |       | 10  |        |
| 2 | Theme Provider & Hook          |       | 12  |        |
| 3 | Sidebar Component              |       | 12  |        |
| 4 | Header Component               |       | 10  |        |
| 5 | MainLayout Component           |       | 8   |        |
| 6 | Reusable Components            |       | 12  |        |
| 7 | Pages (Dashboard/Analytics/Settings) | | 20  |        |
| 8 | Routing & App Integration      |       | 16  |        |
|   | **TOTAL**                      |       | **100** |    |

## Grade
- 90–100: Excellent
- 75–89: Good
- 60–74: Satisfactory
- Below 60: Needs Improvement

**Final Grade: <grade>** (<total>/100)

## Detailed Feedback

### Strengths
- (list what was done well)

### Areas for Improvement
- (list specific issues with file paths and line numbers)

### Critical Issues (if any)
- (list any broken functionality, runtime errors, or missing core features)
```

## Important Rules

1. **Be objective** — score strictly against the criteria, do not give points for incomplete work
2. **Be specific** — reference exact file paths and line numbers in feedback
3. **Be encouraging** — frame improvement areas constructively
4. **Check actual behavior** — don't assume code works just because it exists; verify patterns are correct
5. **Zero for null returns** — if a component still returns `null` or placeholder content, it scores 0 for that feature
6. **Partial credit** — if a feature is partially implemented, give proportional points
