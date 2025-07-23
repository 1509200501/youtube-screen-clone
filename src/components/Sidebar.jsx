import React from 'react';
import { Box, List, ListItem, ListItemText } from '@mui/material';

const items = ['Home', 'Trending', 'Subscriptions', 'Library'];

export default function Sidebar() {
  return (
    <Box sx={{ width: '200px', borderRight: '1px solid #ccc', height: '100vh', position: 'fixed' }}>
      <List>
        {items.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
