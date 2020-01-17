import React, { useEffect, useRef, useState } from 'react';
import play from '../../assets/img/play.svg';
import pause from '../../assets/img/stop.svg';
import waveSvg from '../../assets/img/wave.svg';
import convertCurrentTime from '../../utils/helpers/convertCurrentTime';

export const AudioMessage = ({ audio }) => {
  const [isPlay, setPlay] = useState(false);
  const [progress, setProgress] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef(null);

  useEffect(() => {
    audioRef.current.addEventListener(
      'playing',
      () => {
        setPlay(true);
      },
      false
    );
    audioRef.current.addEventListener(
      'ended',
      () => {
        setPlay(false);
        setProgress(0);
        setCurrentTime(0);
      },
      false
    );
    audioRef.current.addEventListener(
      'pause',
      () => {
        setPlay(false);
      },
      false
    );
    audioRef.current.addEventListener('timeupdate', () => {
      const duration = (audioRef.current && audioRef.current.duration) || 0;
      setCurrentTime(audioRef.current.currentTime);
      setProgress((audioRef.current.currentTime / duration) * 100);
    });
  }, []);

  const togglePlay = () => {
    if (!isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };
  return (
    <div className="message__audio">
      <audio src={audio} preload="auto" ref={audioRef} />
      <div
        className="message__audio-progress"
        style={{ width: progress + '%' }}
      />
      <div className="message__audio-info">
        <div className="message__audio-info-btn">
          <button onClick={togglePlay}>
            <img src={!isPlay ? play : pause} alt="play" />
          </button>
        </div>
        <div className="message__audio-info-wave">
          <img src={waveSvg} alt="wave" />
        </div>
        <span className="message__audio-info-duration">
          {convertCurrentTime(currentTime)}
        </span>
      </div>
    </div>
  );
};
