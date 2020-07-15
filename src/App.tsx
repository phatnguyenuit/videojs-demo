import React, { useState } from 'react';
import VideoPlayer from 'components/VideoPlayer';

import './App.css';
import 'video.js/dist/video-js.min.css';
import { VideoJsPlayerOptions } from 'video.js';

const getRandomItem = (arr: Array<any>) =>
  arr[Math.floor(Math.random() * arr.length)];

const SOURCES = [
  {
    src: "https://www.youtube.com/watch?v=JNMxU8LzyIc&feature=youtu.be",
    type: "video/youtube"
  },
  {
    src:
      'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8',
    type: 'application/x-mpegURL',
  },
  {
    src: 'https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8',
    type: 'application/x-mpegURL',
  },
  {
    src: 'https://mnmedias.api.telequebec.tv/m3u8/29880.m3u8',
    type: 'application/x-mpegURL',
  },
  {
    src:
      'https://bitmovin-a.akamaihd.net/content/playhouse-vr/m3u8s/105560.m3u8',
    type: 'application/x-mpegURL',
  },
];

const videoOptions: VideoJsPlayerOptions = {
  playbackRates: [0.5, 1, 1.25, 1.5, 2],
  controls: true,
};

function App() {
  const [sources, setSources] = useState([SOURCES[0]]);
  return (
    <div className="App">
      <p>{JSON.stringify(sources, null, 2)}</p>
      <button onClick={() => setSources(getRandomItem(SOURCES))}>
        Next random video
      </button>

      <VideoPlayer {...videoOptions} sources={sources} techOrder={['youtube']} />
    </div>
  );
}

export default App;
