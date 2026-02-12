// ── Shared TypeScript interfaces & types ──

export interface StatCardData {
  id: string;
  title: string;
  value: string | number;
  change: number; // percentage change, e.g. 12.5 or -3.2
  changeLabel: string;
  icon: string; // MUI icon name key
}

export interface ChartCardData {
  id: string;
  title: string;
  description: string;
  type: ChartType;
}

export type ChartType = 'line' | 'bar' | 'pie' | 'area';

export interface NavItem {
  label: string;
  path: string;
  icon: string; // MUI icon name key
}

export interface AnalyticsRow {
  id: string;
  page: string;
  visitors: number;
  uniqueVisitors: number;
  bounceRate: number;
  avgDuration: string;
}

export type ThemeMode = 'light' | 'dark';

export interface ThemeContextType {
  mode: ThemeMode;
  toggleTheme: () => void;
}

export interface SidebarContextType {
  open: boolean;
  toggleSidebar: () => void;
}

export interface SettingsFormData {
  siteName: string;
  language: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
}
