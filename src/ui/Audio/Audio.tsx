import { FC, useRef, useState } from 'react';
import { IconPause, IconPlay } from '@icons';
import styles from './Audio.module.scss';

type AudioProps = {
  src: string | "";
};

export const Audio: FC<AudioProps> = ({ src }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState("0:00");

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const togglePlayPause = () => {
    if (audioRef?.current?.paused) {
      audioRef.current.play();
      setIsPlaying(true);
    } else {
      audioRef?.current?.pause();
      setIsPlaying(false);
    }
  };

  const handleTimeUpdate = () => {
    if(audioRef?.current?.currentTime && audioRef?.current?.duration) {
      const currentProgress = (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(currentProgress);
      setCurrentTime(formatTime(audioRef.current.currentTime));
    };
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setProgress(0);
    setCurrentTime("0:00");
  };

  return (
    <div className={styles.chat_audio_container}>
      <audio ref={audioRef} src={src} onTimeUpdate={handleTimeUpdate} onEnded={handleEnded} />

      {!isPlaying ? (
        <div
          onClick={togglePlayPause}
          className='p-2 bg-[#0086FF] cursor-pointer rounded-full hover:opacity-50'
        >
          <IconPlay/>
        </div>
      ) : (
        <div
          onClick={togglePlayPause}
          className='p-2 bg-[#0086FF] cursor-pointer rounded-full hover:opacity-50'
        >
          <IconPause/>
        </div>
      )}

      <div className={styles.progress_bar_container}>
        <div className={styles.progress_bar} style={{ width: `${progress}%` }}></div>
        <span className={styles.current_time}>{currentTime}</span>
      </div>
    </div>
  );
};
