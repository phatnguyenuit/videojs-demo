import React, { memo, useEffect, useRef, useState } from 'react';
import videojs, { VideoJsPlayerOptions, VideoJsPlayer } from 'video.js';
import './styles.css';

export const VideoPlayerComponent: React.FC<VideoPlayerProps> = (props) => {
  const playerRef = useRef<HTMLVideoElement>(null);
  const [requireRedraw, setRequireRedraw] = useState(false);

  useEffect(() => {
    let player: VideoJsPlayer;
    if (!requireRedraw) {
      player = videojs(playerRef.current, props);
    }
    return () => {
      if (!player) {
        return;
      }
      setRequireRedraw(true);
    };
  }, [props, requireRedraw]);
  useEffect(() => {
    if (requireRedraw) {
      setRequireRedraw(false);
    }
  }, [requireRedraw]);
  return (
    <div>
      {!requireRedraw && (
        <div data-vjs-player>
          <video ref={playerRef} className="video-js" />
        </div>
      )}
    </div>
  );
};

const VideoPlayer = memo(VideoPlayerComponent);
VideoPlayer.displayName = 'VideoPlayer';

export default VideoPlayer;

export interface VideoPlayerProps extends VideoJsPlayerOptions {}
