import { Card, CardContent, Box, Typography } from '@mui/material';
import {
  People,
  AttachMoney,
  ShoppingCart,
  TrendingUp,
  TrendingDown,
} from '@mui/icons-material';
import type { StatCardData } from '../../types';

const iconMap: Record<string, React.ReactElement> = {
  People: <People />,
  AttachMoney: <AttachMoney />,
  ShoppingCart: <ShoppingCart />,
  TrendingUp: <TrendingUp />,
};

interface StatCardProps {
  data: StatCardData;
}

export function StatCard({ data }: StatCardProps) {
  const isPositive = data.change >= 0;

  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary" fontWeight={500}>
            {data.title}
          </Typography>
          <Box
            sx={{
              p: 1,
              borderRadius: 2,
              bgcolor: 'primary.main',
              color: 'white',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {iconMap[data.icon] ?? <TrendingUp />}
          </Box>
        </Box>

        <Typography variant="h4" component="div" fontWeight={700} sx={{ mb: 1 }}>
          {data.value}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          {isPositive ? (
            <TrendingUp fontSize="small" color="success" />
          ) : (
            <TrendingDown fontSize="small" color="error" />
          )}
          <Typography
            variant="body2"
            color={isPositive ? 'success.main' : 'error.main'}
            fontWeight={600}
          >
            {isPositive ? '+' : ''}
            {data.change}%
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {data.changeLabel}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}
