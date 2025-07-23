import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const VideoCard = ({ video }) => {
  return (
    <Card sx={{ maxWidth: '100%' }}>
      <CardMedia
        component="img"
        height="140"
        image={video.thumbnail}
        alt={video.title}
      />
      <CardContent>
        <Typography variant="subtitle1" fontWeight="bold">
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
