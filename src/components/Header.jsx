'use client';
import React from 'react';
import { AppBar, Toolbar, Typography, Box, InputBase, IconButton, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ThemeToggle from './ThemeToggle';
import MicIcon from '@mui/icons-material/Mic';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Header = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';

  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: isDark ? '#212121' : 'white',
        color: isDark ? 'white' : 'black',
      }}
    >
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
        {/* YouTube Logo + Text */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <YouTubeIcon sx={{ color: 'red', fontSize: 32 }} />
          <Typography
            variant="h6"
            noWrap
            sx={{
              fontFamily: 'Roboto, sans-serif',
              fontWeight: 'bold',
              fontSize: '24px',
              letterSpacing: '-0.5px',
            }}
          >
            YouTube
            <Box component="span" sx={{ fontWeight: 'normal', fontSize: '16px', ml: 0.5 }}>
              <sup>IN</sup>
            </Box>
          </Typography>
        </Box>

        {/* Search and Mic */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              backgroundColor: isDark ? '#333' : '#f1f1f1',
              borderRadius: 2,
              px: 1,
              width: { xs: '100px', sm: '200px', md: '300px' },
            }}
          >
            <InputBase
              placeholder="Search…"
              sx={{ ml: 1, flex: 1 }}
              inputProps={{ 'aria-label': 'search' }}
            />
            <IconButton type="submit" sx={{ p: '5px' }} aria-label="search">
              <SearchIcon />
            </IconButton>
          </Box>

          <IconButton
            aria-label="mic"
            sx={{
              backgroundColor: isDark ? '#333' : '#f1f1f1',
              borderRadius: '50%',
              height: '40px',
              width: '40px',
            }}
          >
            <MicIcon />
          </IconButton>
        </Box>

        {/* Theme Toggle */}
        <Box>
          <ThemeToggle />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
