import React, { useState, useEffect } from 'react';
import './video.css'

export default function Video(props) {
    const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = React.createRef();

  useEffect(() => {
    const video = videoRef.current;

    // Autoplay and loop the video upon mounting
    video.muted = true; // Mute the video by default
    video.autoplay = true;
    video.loop = true;

    // Handle play/pause based on component visibility
    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        video.play();
        setIsPlaying(true);
      } else {
        video.pause();
        setIsPlaying(false);
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);

    
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
    }, []);

  return (
    <div className="video-background">
        <video ref={videoRef} src={props.Url_Path} type="video/mp4"></video>
    </div>
  )
}
