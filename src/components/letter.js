import React, { useState, useRef } from 'react';
import './letter.css';
import audioFile from './song.mp3';

const LoveLetter = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFullSize, setIsFullSize] = useState(false);
  const audioRef = useRef(null);

  const handleOpenLetter = () => {
    setIsOpen(true);
    setTimeout(() => {
      setIsFullSize(true);
      // Ensuring audio play is directly a result of this user interaction
      if (audioRef.current) {
        audioRef.current.play()
          .then(() => console.log("Playback succeeded"))
          .catch(e => console.error("Playback failed:", e));
      }
    }, 800);
  };

  const handleCloseLetter = () => {
    setIsFullSize(false);
    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
      setIsOpen(false);
    }, 800);
  };


return (
  <div className={`envelope ${isOpen ? 'open' : ''}`} onClick={!isFullSize ? handleOpenLetter : handleCloseLetter}>
    <div className="flap"></div>
    <div className="body"></div>
    <div className={`letter ${isFullSize ? 'fullSize' : ''}`}>
     
        Hey there, my partner in crime! 🌟<br />

        Just wanted to drop you a quick note to say how grateful I am to have you as my best friend💕.<br/>
        You're like the sibling I never had, always there to listen, support, and laugh with me through it all.<br />

        From the late-night chats to the spontaneous road trips, you make every moment brighter and every memory sweeter.
        You've seen me at my best and my worst, yet you've never wavered in your friendship.<br />
        🚀💕

        Cheers,<br />
        Chotu
    
    </div>
    <audio ref={audioRef} src={audioFile} onError={(e) => console.error('Audio error:', e.message)} />
  </div>
);
};

export default LoveLetter;
