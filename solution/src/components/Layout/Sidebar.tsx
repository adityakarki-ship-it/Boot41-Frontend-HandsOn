import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  Dashboard,
  BarChart,
  Settings,
} from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { useSidebar } from '../../hooks/useSidebar';
import { navItems } from '../../data/mockData';

const DRAWER_WIDTH = 260;

const iconMap: Record<string, React.ReactElement> = {
  Dashboard: <Dashboard />,
  BarChart: <BarChart />,
  Settings: <Settings />,
};

export function Sidebar() {
  const { open, toggleSidebar } = useSidebar();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const drawerContent = (
    <>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, px: 1 }}>
          <Dashboard color="primary" />
          <Typography variant="h6" noWrap fontWeight={700}>
            Analytics
          </Typography>
        </Box>
      </Toolbar>
      <List sx={{ px: 1 }}>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              component={NavLink}
              to={item.path}
              onClick={isMobile ? toggleSidebar : undefined}
              sx={{
                borderRadius: 2,
                '&.active': {
                  bgcolor: 'primary.main',
                  color: 'white',
                  '& .MuiListItemIcon-root': { color: 'white' },
                },
                '&:hover': {
                  bgcolor: 'action.hover',
                },
                '&.active:hover': {
                  bgcolor: 'primary.dark',
                },
              }}
            >
              <ListItemIcon sx={{ minWidth: 40 }}>
                {iconMap[item.icon] ?? <Dashboard />}
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );

  return (
    <Box
      component="nav"
      sx={{ width: { md: open ? DRAWER_WIDTH : 0 }, flexShrink: 0 }}
    >
      {/* Mobile drawer */}
      <Drawer
        variant="temporary"
        open={isMobile && open}
        onClose={toggleSidebar}
        ModalProps={{ keepMounted: true }}
        sx={{
          display: { xs: 'block', md: 'none' },
          '& .MuiDrawer-paper': { width: DRAWER_WIDTH },
        }}
      >
        {drawerContent}
      </Drawer>

      {/* Desktop drawer */}
      <Drawer
        variant="persistent"
        open={open}
        sx={{
          display: { xs: 'none', md: 'block' },
          '& .MuiDrawer-paper': {
            width: DRAWER_WIDTH,
            boxSizing: 'border-box',
          },
        }}
      >
        {drawerContent}
      </Drawer>
    </Box>
  );
}
