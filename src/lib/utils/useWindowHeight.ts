import { useEffect, useRef } from 'react';

export function useWindowHeight() {
  const heightRef = useRef(window.innerHeight);

  useEffect(() => {
    const handleResize = () => {
      heightRef.current = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return heightRef;
}
