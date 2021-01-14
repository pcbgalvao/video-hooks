import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {
  let renderedList = null;
  if (videos !== undefined && videos.length>0) {
    renderedList = videos.map(video=> {
      return (
        <div key={video.id.videoId}>
          <VideoItem 
            video={video}
            onVideoSelect={onVideoSelect} />
        </div>
      )
    });    
  };
  
  return (
    <div className="ui relaxed divided list">
      {renderedList}
    </div>
  )
};

export default VideoList;