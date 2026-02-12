import { Card, CardContent, Typography, Box } from '@mui/material';
import { BarChart, ShowChart, PieChart, StackedLineChart } from '@mui/icons-material';
import type { ChartCardData, ChartType } from '../../types';

const chartIconMap: Record<ChartType, React.ReactElement> = {
  line: <ShowChart sx={{ fontSize: 48, color: 'primary.light' }} />,
  bar: <BarChart sx={{ fontSize: 48, color: 'primary.light' }} />,
  pie: <PieChart sx={{ fontSize: 48, color: 'primary.light' }} />,
  area: <StackedLineChart sx={{ fontSize: 48, color: 'primary.light' }} />,
};

interface ChartCardProps {
  data: ChartCardData;
}

export function ChartCard({ data }: ChartCardProps) {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {data.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
          {data.description}
        </Typography>

        {/* Chart placeholder */}
        <Box
          sx={{
            height: 200,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'action.hover',
            borderRadius: 2,
          }}
        >
          {chartIconMap[data.type]}
        </Box>
      </CardContent>
    </Card>
  );
}
