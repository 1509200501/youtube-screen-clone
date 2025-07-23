import React from 'react';
import { Box, Grid } from '@mui/material';
import VideoCard from './VideoCard';
//import goaImg from '../../assests/goaimg.png'

const sampleVideos = [
  {
    title: 'Exploring the Goa Day 2',
    channel: 'UrbanLife',
    views: '1M',
    uploaded: '2 days ago',
    thumbnail: '/goaimg.png',
  },
  {
    title: 'My Song MIX',
    channel: 'BollyWood Vibes',
    views: '11.6M',
    uploaded: '1 week ago',
    thumbnail: '/mymix.jpg',
  },
  {
    title: 'Master Chef Challenge',
    channel: 'MoodChannel',
    views: '560K',
    uploaded: '3 days ago',
    thumbnail: '/masterchef.jpg',
  },
  {
    title: 'Solo Road Trip',
    channel: 'The Wanderer',
    views: '400K',
    uploaded: '5 days ago',
    thumbnail: 'soloroad.jpg',
  },
  {
    title: 'Mountain Escapes',
    channel: 'NatureScope',
    views: '1.2M',
    uploaded: '1 day ago',
    thumbnail: 'mountain.jpg',
  },
  {
    title: 'Apartment Tour 2025',
    channel: 'Minimal Living',
    views: '2M',
    uploaded: '1 week ago',
    thumbnail: 'Apartment.jpg',
  },
];

const Feed = () => {
  return (
    <Box sx={{ marginLeft: '220px', padding: 2 }}>
      <Grid container spacing={2}>
        {sampleVideos.map((video, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <VideoCard video={video} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Feed;
