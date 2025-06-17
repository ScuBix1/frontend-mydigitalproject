import { useRef } from 'react';

interface UseSoundOptions {
  loop?: boolean;
}

export function useSound(src: string, options: UseSoundOptions = {}) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const play = () => {
    if (!audioRef.current) {
      audioRef.current = new Audio(src);
      audioRef.current.loop = !!options.loop;
    }
    audioRef.current.currentTime = 0;
    audioRef.current.play();
  };

  const stop = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  };

  return { play, stop };
}
