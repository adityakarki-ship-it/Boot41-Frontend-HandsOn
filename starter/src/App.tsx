// TODO: Wire up the router
//
// Requirements:
// - Import RouterProvider from 'react-router-dom'
// - Import the router from './routes'
// - Render <RouterProvider router={router} />
//
// This is the root component that connects the route definitions to the app.

import { Typography, Box } from '@mui/material';

function App() {
  // TODO: Replace placeholder with RouterProvider
  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4">Analytics Dashboard</Typography>
      <Typography color="text.secondary" sx={{ mt: 1 }}>
        Replace this with RouterProvider — see TODO above
      </Typography>
    </Box>
  );
}

export default App;
