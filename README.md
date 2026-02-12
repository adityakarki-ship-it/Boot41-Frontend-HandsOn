# Analytics Dashboard — Intern Hands-On Project

A training project for intermediate interns covering **TypeScript, React, MUI, responsive design, routing, clean architecture, providers, and package management**.

## What You'll Build

A fully functional **Analytics Dashboard** with:
- Dashboard page with KPI stat cards and chart placeholders
- Analytics page with data table and charts
- Settings page with theme toggle, form controls
- Responsive sidebar navigation
- Light/dark theme switching

## Tech Stack

- **Vite** — fast build tool
- **React 19** + **TypeScript**
- **Material UI (MUI)** — component library & styling
- **React Router v6** — client-side routing
- **Context API** — state management (theme + sidebar)

## Project Structure

```
HandsOn/
├── README.md          ← you are here
├── starter/           ← your exercise project (has TODOs)
└── solution/          ← complete working reference
```

## Getting Started

### 1. Work in the starter project

```bash
cd starter
npm install
npm run dev
```

Open http://localhost:5173 — you'll see a placeholder page.

### 2. Follow the build order

Open `starter/INSTRUCTIONS.md` for the architecture guide and build order.

### 3. Use AI prompts

Open `starter/PROMPTS.md` for 8 copy-paste-ready prompts. Work through them in order to build out the full dashboard.

### 4. Check your work against the solution

```bash
cd solution
npm install
npm run dev
```

Open http://localhost:5174 (or the next available port) to see the complete working dashboard.

## Topics Covered

| Topic | Where It's Exercised |
|-------|---------------------|
| TypeScript | `types/index.ts`, typed props throughout |
| React Components | StatCard, ChartCard, Sidebar, Header, PageHeader |
| Material UI | Box, Grid, Paper, Drawer, AppBar, Card, Switch, etc. |
| Layout (Flex/Grid) | MainLayout, DashboardPage grid |
| Responsive Design | MUI breakpoints, responsive Drawer |
| Routing | React Router v6 createBrowserRouter |
| Clean Architecture | Feature-based folders |
| Providers/Context | ThemeProvider, SidebarProvider |
| Package Management | package.json dependencies |
