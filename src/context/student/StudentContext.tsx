import { ReactNode, createContext, useState } from 'react';

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

  const setStudentId = (id: string) => {
    setStudentIdState(id);
    localStorage.setItem('studentId', id.toString());
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
        setStudentId,
        setDurationMinutes,
        setPathAvatar,
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};
