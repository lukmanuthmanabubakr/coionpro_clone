import React from 'react';
import "./Conprofile.css"

const VideoPlayer = () => {
  return (
    <div>
      <video controls width="600" height="400">
        <source src="https://youtu.be/eY0ELLDiwD4" type="video/mp4" />
      </video>
    </div>
  );
}

export default VideoPlayer;
