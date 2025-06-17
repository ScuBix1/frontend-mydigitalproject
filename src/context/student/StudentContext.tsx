import { ReactNode, createContext, useEffect, useState } from 'react';

export const StudentContext = createContext<StudentContextType | undefined>(
  undefined
);

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [studentId, setStudentIdState] = useState<string | undefined>(() => {
    const stored = localStorage.getItem('studentId');
    return stored ? stored : undefined;
  });

  const [durationMinutes, setDurationMinutesState] = useState<number>(() => {
    const stored = localStorage.getItem('durationMinutes');
    return stored ? parseInt(stored) : 30;
  });

  const [pathAvatar, setPathAvatarState] = useState<AvatarName>(() => {
    const stored = localStorage.getItem('pathAvatar');
    if (stored) {
      return stored as AvatarName;
    }
    return 'wizard.png';
  });

  const [sessionStartTime, setSessionStartTime] = useState<number | null>(
    () => {
      const stored = localStorage.getItem('sessionStartTime');
      return stored ? parseInt(stored) : null;
    }
  );

  const [isSessionExpired, setIsSessionExpired] = useState(false);

  useEffect(() => {
    if (!sessionStartTime || !durationMinutes) return;

    const checkSessionTime = () => {
      const currentTime = Date.now();
      const sessionDuration = durationMinutes * 60 * 1000;

      if (currentTime - sessionStartTime > sessionDuration) {
        setIsSessionExpired(true);
        localStorage.setItem('sessionExpired', 'true');
        localStorage.setItem(
          'sessionExpiredMessage',
          'Le temps de session est écoulé'
        );
        window.location.href = '/tutor/check';
      }
    };

    const interval = setInterval(checkSessionTime, 60000);
    return () => clearInterval(interval);
  }, [sessionStartTime, durationMinutes]);

  const setStudentId = (id: string) => {
    setStudentIdState(id);
    localStorage.setItem('studentId', id.toString());
    const startTime = Date.now();
    setSessionStartTime(startTime);
    localStorage.setItem('sessionStartTime', startTime.toString());
    setIsSessionExpired(false);
    localStorage.removeItem('sessionExpired');
    localStorage.removeItem('sessionExpiredMessage');
  };

  const setDurationMinutes = (minutes: number) => {
    setDurationMinutesState(minutes);
    localStorage.setItem('durationMinutes', minutes.toString());
  };

  const setPathAvatar = (path: AvatarName) => {
    setPathAvatarState(path);
    localStorage.setItem('pathAvatar', path.toString());
  };

  return (
    <StudentContext.Provider
      value={{
        studentId,
        durationMinutes,
        pathAvatar,
        sessionStartTime,
        isSessionExpired,
        setStudentId,
        setDurationMinutes,
        setPathAvatar,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
