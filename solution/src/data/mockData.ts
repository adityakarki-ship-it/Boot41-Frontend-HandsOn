import type { StatCardData, ChartCardData, NavItem, AnalyticsRow } from '../types';

export const statCards: StatCardData[] = [
  {
    id: 'stat-1',
    title: 'Total Users',
    value: '14,892',
    change: 12.5,
    changeLabel: 'vs last month',
    icon: 'People',
  },
  {
    id: 'stat-2',
    title: 'Revenue',
    value: '$48,350',
    change: 8.2,
    changeLabel: 'vs last month',
    icon: 'AttachMoney',
  },
  {
    id: 'stat-3',
    title: 'Orders',
    value: '1,243',
    change: -3.1,
    changeLabel: 'vs last month',
    icon: 'ShoppingCart',
  },
  {
    id: 'stat-4',
    title: 'Conversion Rate',
    value: '3.24%',
    change: 1.8,
    changeLabel: 'vs last month',
    icon: 'TrendingUp',
  },
];

export const chartCards: ChartCardData[] = [
  {
    id: 'chart-1',
    title: 'Revenue Over Time',
    description: 'Monthly revenue trend for the current year',
    type: 'line',
  },
  {
    id: 'chart-2',
    title: 'Users by Region',
    description: 'Distribution of users across regions',
    type: 'bar',
  },
  {
    id: 'chart-3',
    title: 'Traffic Sources',
    description: 'Breakdown of traffic by source',
    type: 'pie',
  },
  {
    id: 'chart-4',
    title: 'Page Views',
    description: 'Daily page views over the last 30 days',
    type: 'area',
  },
];

export const navItems: NavItem[] = [
  { label: 'Dashboard', path: '/', icon: 'Dashboard' },
  { label: 'Analytics', path: '/analytics', icon: 'BarChart' },
  { label: 'Settings', path: '/settings', icon: 'Settings' },
];

export const analyticsRows: AnalyticsRow[] = [
  {
    id: 'row-1',
    page: '/home',
    visitors: 4521,
    uniqueVisitors: 3102,
    bounceRate: 32.1,
    avgDuration: '2m 45s',
  },
  {
    id: 'row-2',
    page: '/products',
    visitors: 3200,
    uniqueVisitors: 2150,
    bounceRate: 45.3,
    avgDuration: '1m 32s',
  },
  {
    id: 'row-3',
    page: '/about',
    visitors: 1800,
    uniqueVisitors: 1540,
    bounceRate: 52.8,
    avgDuration: '0m 58s',
  },
  {
    id: 'row-4',
    page: '/contact',
    visitors: 920,
    uniqueVisitors: 870,
    bounceRate: 38.4,
    avgDuration: '1m 12s',
  },
  {
    id: 'row-5',
    page: '/blog',
    visitors: 2750,
    uniqueVisitors: 2100,
    bounceRate: 28.6,
    avgDuration: '3m 15s',
  },
];
