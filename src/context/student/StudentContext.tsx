import { ReactNode, createContext, useContext, useState } from 'react';

interface StudentContextType {
  studentId?: string;
  durationMinutes: number;
  setStudentId: (id: string) => void;
  setDurationMinutes: (minutes: number) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [studentId, setStudentIdState] = useState<string | undefined>(() => {
    const stored = localStorage.getItem('studentId');
    return stored ? stored : undefined;
  });

  const [durationMinutes, setDurationMinutesState] = useState<number>(() => {
    const stored = localStorage.getItem('durationMinutes');
    return stored ? parseInt(stored) : 30;
  });

  const setStudentId = (id: string) => {
    setStudentIdState(id);
    localStorage.setItem('studentId', id.toString());
  };

  const setDurationMinutes = (minutes: number) => {
    setDurationMinutesState(minutes);
    localStorage.setItem('durationMinutes', minutes.toString());
  };

  return (
    <StudentContext.Provider
      value={{ studentId, durationMinutes, setStudentId, setDurationMinutes }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error(
      'useStudentContext doit être utilisé avec un StudentProvider'
    );
  }
  return context;
};
