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
}

export interface StudentWithSessions {
  id: number;
  firstname: string;
  avatar: string;
  sessions: Session[];
}
