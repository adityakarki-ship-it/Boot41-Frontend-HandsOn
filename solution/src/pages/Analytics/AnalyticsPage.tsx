import {
  Box,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from '@mui/material';
import { PageHeader } from '../../components/common/PageHeader';
import { ChartCard } from '../../components/Cards/ChartCard';
import { chartCards, analyticsRows } from '../../data/mockData';

export function AnalyticsPage() {
  return (
    <Box>
      <PageHeader
        title="Analytics"
        subtitle="Detailed analytics and data insights."
      />

      {/* Chart Section */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        {chartCards.slice(0, 2).map((chart) => (
          <Grid size={{ xs: 12, md: 6 }} key={chart.id}>
            <ChartCard data={chart} />
          </Grid>
        ))}
      </Grid>

      {/* Data Table */}
      <Typography variant="h5" sx={{ mb: 2 }}>
        Page Analytics
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Page</TableCell>
              <TableCell align="right">Visitors</TableCell>
              <TableCell align="right">Unique Visitors</TableCell>
              <TableCell align="right">Bounce Rate</TableCell>
              <TableCell align="right">Avg Duration</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {analyticsRows.map((row) => (
              <TableRow key={row.id} hover>
                <TableCell component="th" scope="row">
                  {row.page}
                </TableCell>
                <TableCell align="right">
                  {row.visitors.toLocaleString()}
                </TableCell>
                <TableCell align="right">
                  {row.uniqueVisitors.toLocaleString()}
                </TableCell>
                <TableCell align="right">{row.bounceRate}%</TableCell>
                <TableCell align="right">{row.avgDuration}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
