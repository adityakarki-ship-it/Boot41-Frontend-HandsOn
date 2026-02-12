import { createBrowserRouter } from 'react-router-dom';
import { MainLayout } from '../components/Layout/MainLayout';
import { DashboardPage } from '../pages/Dashboard/DashboardPage';
import { AnalyticsPage } from '../pages/Analytics/AnalyticsPage';
import { SettingsPage } from '../pages/Settings/SettingsPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <DashboardPage /> },
      { path: 'analytics', element: <AnalyticsPage /> },
      { path: 'settings', element: <SettingsPage /> },
    ],
  },
]);
