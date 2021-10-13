import React from 'react';

const VideoItem = ({video}) => {
  return (
    <div> 
      <h1>{video.snippet.title}</h1>
      <img src={video.snippet.thumbnails.medium.url} />
        
    </div>
  );
};

export default VideoItem;
