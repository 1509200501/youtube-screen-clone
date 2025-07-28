import React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const items = ['Home', 'Trending', 'Subscriptions', 'Library'];

export default function Sidebar({ open, onClose }) {
  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <List sx={{ width: 200 }}>
        {items.map((item) => (
          <ListItem button key={item}>
            <ListItemText primary={item} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
