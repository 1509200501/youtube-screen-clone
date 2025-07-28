import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        maxWidth: '100%',
        transition: 'transform 0.3s, box-shadow 0.3s',
        '&:hover': {
          transform: 'scale(1.03)',
          boxShadow: 10,
        },
        cursor: 'pointer',
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={video.thumbnail}
        alt={video.title}
        sx={{
          objectFit: 'cover',
        }}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold" gutterBottom>
          {video.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {video.channel} • {video.views} views • {video.uploaded}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
