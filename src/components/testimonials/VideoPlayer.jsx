import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  const videoId = import.meta.env.VITE_VIDEO_ID; 

  return <YouTube videoId={videoId} autoplay={true} />;
};

export default VideoPlayer;