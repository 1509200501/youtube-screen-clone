'use client';
import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  InputBase,
  IconButton,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MicIcon from '@mui/icons-material/Mic';
import YouTubeIcon from '@mui/icons-material/YouTube';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ThemeToggle from './ThemeToggle';
import Sidebar from './Sidebar';

const Header = () => {
  const theme = useTheme();
  const isDark = theme.palette.mode === 'dark';
  const [openSidebar, setOpenSidebar] = useState(false); 

  return (
    <>
      <AppBar
        position="sticky"
        elevation={0}
        sx={{
          backgroundColor: isDark ? '#212121' : 'white',
          color: isDark ? 'white' : 'black',
        }}
      >
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
          {/* Left: Menu + Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton onClick={() => setOpenSidebar(true)}>
              <MenuIcon />
            </IconButton>
            <YouTubeIcon sx={{ color: 'red', fontSize: 32 }} />
            <Typography
              variant="h6"
              noWrap
              sx={{ fontWeight: 'bold', fontSize: '24px', letterSpacing: '-0.5px' }}
            >
              YouTube
              <Box component="span" sx={{ fontWeight: 'normal', fontSize: '16px', ml: 0.5 }}>
                <sup>IN</sup>
              </Box>
            </Typography>
          </Box>

         
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
              <IconButton type="submit" sx={{ p: '5px' }}>
                <SearchIcon />
              </IconButton>
            </Box>

            <IconButton
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

         
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <IconButton>
              <AddCircleOutlineIcon />
            </IconButton>
            <IconButton>
              <NotificationsNoneIcon />
            </IconButton>
            <ThemeToggle />
          </Box>
        </Toolbar>
      </AppBar>

     
      <Sidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
    </>
  );
};

export default Header;
