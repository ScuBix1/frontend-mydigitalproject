import { ReactNode, createContext, useContext, useState } from 'react';

interface StudentContextType {
  studentId: number | null;
  durationMinutes: number;
  setStudentId: (id: number) => void;
  setDurationMinutes: (minutes: number) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider = ({ children }: { children: ReactNode }) => {
  const [studentId, setStudentId] = useState<number | null>(null);
  const [durationMinutes, setDurationMinutes] = useState<number>(30);

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
