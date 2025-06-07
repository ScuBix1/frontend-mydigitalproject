export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  start_hour?: string;
  duration?: number;
  grade: string;
  avatar: string;
  sessions: Session[];
  password?: string;
}

export interface StudentWithSessions {
  id: number;
  firstname: string;
  avatar: string;
  sessions: Session[];
}

export interface UpdateStudentDto {
  firstname?: string;
  lastname?: string;
  username?: string;
  password?: string;
  avatar?: string;
  start_hour?: string;
  duration?: number;
}
