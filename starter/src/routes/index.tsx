// TODO: Define the application routes using React Router v6
//
// Requirements:
// - Use createBrowserRouter from 'react-router-dom'
// - Create a single parent route at path '/' with MainLayout as the element
// - Add three child routes:
//   1. index: true → DashboardPage (the default "/" page)
//   2. path: 'analytics' → AnalyticsPage
//   3. path: 'settings' → SettingsPage
// - Export the router as a named export
//
// Imports you'll need:
//   createBrowserRouter from 'react-router-dom'
//   MainLayout from '../components/Layout/MainLayout'
//   DashboardPage from '../pages/Dashboard/DashboardPage'
//   AnalyticsPage from '../pages/Analytics/AnalyticsPage'
//   SettingsPage from '../pages/Settings/SettingsPage'

import { createBrowserRouter } from 'react-router-dom';

// TODO: Create and export the router
export const router = createBrowserRouter([
  {
    path: '/',
    // TODO: Add element (MainLayout) and children routes
  },
]);
