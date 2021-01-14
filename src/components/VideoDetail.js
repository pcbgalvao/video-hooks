import React from 'react';

const VideoDetail = ({video}) => {

  //check if video is empty
  if (!!video && Object.keys(video).length>0) {
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
    return (
      <div>
        <div className="ui embed">
          <iframe 
              title="video player"
              src={videoSrc} />
        </div>
        <div className="ui segment">
          <h4 className="ui header">
            {video.snippet.title}
          </h4>
          <p>{video.snippet.description}</p>
        </div>
      </div>
    )      
  } else {
    return <div>Loading</div>
  }
};

export default VideoDetail;