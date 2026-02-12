import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  TextField,
  FormControlLabel,
  Switch,
  MenuItem,
  Button,
  Divider,
  Typography,
  Grid,
} from '@mui/material';
import { PageHeader } from '../../components/common/PageHeader';
import { useThemeMode } from '../../hooks/useTheme';
import type { SettingsFormData } from '../../types';

const languages = ['English', 'Spanish', 'French', 'German', 'Japanese'];

export function SettingsPage() {
  const { mode, toggleTheme } = useThemeMode();

  const [form, setForm] = useState<SettingsFormData>({
    siteName: 'My Analytics Dashboard',
    language: 'English',
    emailNotifications: true,
    pushNotifications: false,
  });

  const handleChange = (field: keyof SettingsFormData, value: string | boolean) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <Box>
      <PageHeader
        title="Settings"
        subtitle="Manage your dashboard preferences."
      />

      <Grid container spacing={3}>
        {/* General Settings */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                General
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <TextField
                fullWidth
                label="Site Name"
                value={form.siteName}
                onChange={(e) => handleChange('siteName', e.target.value)}
                sx={{ mb: 2 }}
              />

              <TextField
                fullWidth
                select
                label="Language"
                value={form.language}
                onChange={(e) => handleChange('language', e.target.value)}
                sx={{ mb: 2 }}
              >
                {languages.map((lang) => (
                  <MenuItem key={lang} value={lang}>
                    {lang}
                  </MenuItem>
                ))}
              </TextField>
            </CardContent>
          </Card>
        </Grid>

        {/* Appearance & Notifications */}
        <Grid size={{ xs: 12, md: 6 }}>
          <Card sx={{ mb: 3 }}>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Appearance
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <FormControlLabel
                control={
                  <Switch
                    checked={mode === 'dark'}
                    onChange={toggleTheme}
                  />
                }
                label="Dark Mode"
              />
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Notifications
              </Typography>
              <Divider sx={{ mb: 2 }} />

              <FormControlLabel
                control={
                  <Switch
                    checked={form.emailNotifications}
                    onChange={(e) =>
                      handleChange('emailNotifications', e.target.checked)
                    }
                  />
                }
                label="Email Notifications"
                sx={{ display: 'block', mb: 1 }}
              />
              <FormControlLabel
                control={
                  <Switch
                    checked={form.pushNotifications}
                    onChange={(e) =>
                      handleChange('pushNotifications', e.target.checked)
                    }
                  />
                }
                label="Push Notifications"
                sx={{ display: 'block' }}
              />
            </CardContent>
          </Card>
        </Grid>

        {/* Save Button */}
        <Grid size={{ xs: 12 }}>
          <Button variant="contained" size="large">
            Save Changes
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}
