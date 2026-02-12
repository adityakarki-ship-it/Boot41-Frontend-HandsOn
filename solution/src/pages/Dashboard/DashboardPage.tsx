import { Grid, Box, Typography } from '@mui/material';
import { PageHeader } from '../../components/common/PageHeader';
import { StatCard } from '../../components/Cards/StatCard';
import { ChartCard } from '../../components/Cards/ChartCard';
import { statCards, chartCards } from '../../data/mockData';

export function DashboardPage() {
  return (
    <Box>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome back! Here's what's happening today."
      />

      {/* Stat Cards Grid */}
      <Grid container spacing={3} sx={{ mb: 3 }}>
        {statCards.map((card) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={card.id}>
            <StatCard data={card} />
          </Grid>
        ))}
      </Grid>

      {/* Chart Cards Section */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Overview
      </Typography>
      <Grid container spacing={3}>
        {chartCards.map((chart) => (
          <Grid size={{ xs: 12, md: 6 }} key={chart.id}>
            <ChartCard data={chart} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
