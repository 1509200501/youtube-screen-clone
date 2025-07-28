import React from 'react';
import { Box, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const categories = [
  'All',
  'Disha Vakani',
  'Music',
  'Indian soap operas',
  'Stranger Things',
  'Dramedy',
  'Mixes',
  'Mysteries',
  'Bharti Singh',
  'Podcasts',
  'Movie musicals',
];

const CategoryBar = () => {
  const theme = useTheme();
  const isDarkMode = theme.palette.mode === 'dark';

  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        bgcolor: isDarkMode ? '#212121' : '#fff',
        p: 1,
        gap: 1,
      }}
    >
      {categories.map((category, index) => (
        <Chip
          key={index}
          label={category}
          clickable
          sx={{
            bgcolor: isDarkMode ? '#383838' : '#f0f0f0',
            color: isDarkMode ? '#fff' : '#000',
            fontWeight: 700,
            borderRadius: '8px', 

            '&:hover': {
              bgcolor: isDarkMode ? '#4f4f4f' : '#e0e0e0',
              
            },
          }}
        />
      ))}
    </Box>
  );
};

export default CategoryBar;
