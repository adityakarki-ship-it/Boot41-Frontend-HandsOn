import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Breadcrumbs,
  Link,
} from '@mui/material';
import {
  Menu as MenuIcon,
  LightMode,
  DarkMode,
} from '@mui/icons-material';
import { useLocation, Link as RouterLink } from 'react-router-dom';
import { useSidebar } from '../../hooks/useSidebar';
import { useThemeMode } from '../../hooks/useTheme';

export function Header() {
  const { toggleSidebar } = useSidebar();
  const { mode, toggleTheme } = useThemeMode();
  const location = useLocation();

  const pathSegments = location.pathname.split('/').filter(Boolean);

  return (
    <AppBar
      position="sticky"
      color="default"
      elevation={0}
      sx={{
        bgcolor: 'background.paper',
        borderBottom: 1,
        borderColor: 'divider',
      }}
    >
      <Toolbar>
        <IconButton edge="start" onClick={toggleSidebar} sx={{ mr: 2 }}>
          <MenuIcon />
        </IconButton>

        <Box sx={{ flex: 1 }}>
          <Breadcrumbs aria-label="breadcrumb">
            <Link
              component={RouterLink}
              to="/"
              underline="hover"
              color="inherit"
            >
              Home
            </Link>
            {pathSegments.map((segment, index) => {
              const path = `/${pathSegments.slice(0, index + 1).join('/')}`;
              const isLast = index === pathSegments.length - 1;
              const label = segment.charAt(0).toUpperCase() + segment.slice(1);

              return isLast ? (
                <Typography key={path} color="text.primary" fontWeight={500}>
                  {label}
                </Typography>
              ) : (
                <Link
                  key={path}
                  component={RouterLink}
                  to={path}
                  underline="hover"
                  color="inherit"
                >
                  {label}
                </Link>
              );
            })}
          </Breadcrumbs>
        </Box>

        <IconButton onClick={toggleTheme} color="inherit">
          {mode === 'light' ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
