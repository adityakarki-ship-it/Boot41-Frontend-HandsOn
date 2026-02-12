// TODO: Implement the ChartCard component
//
// Props interface:
//   data: ChartCardData   — imported from '../../types'
//
// Requirements:
// - Render a MUI Card with height: '100%'
// - Title as Typography variant="h6"
// - Description as Typography variant="body2" color="text.secondary"
// - Chart placeholder: a Box (height: 200, bgcolor: 'action.hover', borderRadius: 2)
//   centered with the appropriate chart icon based on data.type
//
// Chart icon mapping (data.type → icon):
//   'line' → <ShowChart />, 'bar' → <BarChart />,
//   'pie' → <PieChart />, 'area' → <StackedLineChart />
//
// MUI imports you'll need:
//   Card, CardContent, Typography, Box from '@mui/material'
//   BarChart, ShowChart, PieChart, StackedLineChart from '@mui/icons-material'

import type { ChartCardData } from '../../types';

interface ChartCardProps {
  data: ChartCardData;
}

export function ChartCard(_props: ChartCardProps) {
  // TODO: Destructure props as { data } and implement the card layout
  return null;
}
