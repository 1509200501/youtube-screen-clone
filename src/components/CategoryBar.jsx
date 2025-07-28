'use client';
import React from 'react';
import { Box, Chip } from '@mui/material';

const categories = [
  'All', 'Disha Vakani', 'Music', 'Indian soap operas',
  'Stranger Things', 'Dramedy', 'Mixes', 'Mysteries',
  'Bharti Singh', 'Podcasts', 'Movie musicals'
];

export default function CategoryBar() {
  return (
    <Box
      sx={{
        display: 'flex',
        overflowX: 'auto',
        gap: 1,
        px: 2,
        py: 1,
        background: '#fff',
        borderBottom: '1px solid #e0e0e0',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': { display: 'none' },
      }}
    >
      {categories.map((cat) => (
        <Chip
          key={cat}
          label={cat}
          clickable
          sx={{
            fontWeight: 'bold',
            bgcolor: cat === 'All' ? 'black' : '#f0f0f0',
            color: cat === 'All' ? 'white' : 'black',
            borderRadius: '8px',
          }}
        />
      ))}
    </Box>
  );
}
