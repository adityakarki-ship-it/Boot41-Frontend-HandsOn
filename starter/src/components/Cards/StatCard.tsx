// TODO: Implement the StatCard component
//
// Props interface:
//   data: StatCardData   — imported from '../../types'
//
// Requirements:
// - Render a MUI Card with height: '100%'
// - Top row: title (Typography body2) on the left, icon (Box with primary bgcolor) on the right
// - Middle: value as Typography variant="h4" fontWeight={700}
// - Bottom row: trending icon (TrendingUp/TrendingDown based on change sign),
//   change percentage (colored green/red), and changeLabel text
//
// Icon mapping — map data.icon string to MUI icons:
//   'People' → <People />, 'AttachMoney' → <AttachMoney />,
//   'ShoppingCart' → <ShoppingCart />, 'TrendingUp' → <TrendingUp />
//
// MUI imports you'll need:
//   Card, CardContent, Box, Typography from '@mui/material'
//   People, AttachMoney, ShoppingCart, TrendingUp, TrendingDown from '@mui/icons-material'

import type { StatCardData } from '../../types';

interface StatCardProps {
  data: StatCardData;
}

export function StatCard(_props: StatCardProps) {
  // TODO: Destructure props as { data } and implement the card layout
  return null;
}
