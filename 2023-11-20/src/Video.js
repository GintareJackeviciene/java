import { useState } from 'react';
import './Video.css';


function Video({ videoId, autoplay, color, controls, start, end, loop, thumbrail }) {
  const [showPlayer, setShowPlayer] = useState(false);


  return thumbrail && !showPlayer ?
    <>
      <img 
      src={thumbrail} 
      onClick={() => setShowPlayer(true)} 
      />
  
    </>
    :
    <>
      {videoId ?
        <iframe
          width="560"
          height="315"
          src={'https://www.youtube.com/embed/' + videoId +
            '?autoplay=' + (autoplay ? 1 : 0) +
            '&color=' + (color === 'red' ? 'red' : 'white') +
            '&controls=' + (controls) +
            '&start=' + (start) +
            '&end=' + (end) +
            '&loop=' + (loop)
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        ></iframe>
        :
        <img src="https://picsum.photos/560/315"/>
      }
    </>
}


export default Video;
