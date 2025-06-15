import { useContext } from 'react';
import { StudentContext } from './StudentContext';

export const useStudentContext = () => {
  const context = useContext(StudentContext);
  if (!context) {
    throw new Error(
      'useStudentContext doit être utilisé avec un StudentProvider'
    );
  }
  return context;
};
