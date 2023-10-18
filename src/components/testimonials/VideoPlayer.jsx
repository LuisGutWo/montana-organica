import React from 'react';
import YouTube from 'react-youtube';

const VideoPlayer = () => {
  // const videoId = import.meta.env.VITE_VIDEO_ID; 

  return <YouTube videoId="AhvNSJ7eGro" autoplay={true} />;
};

export default VideoPlayer;