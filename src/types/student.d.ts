export interface Student {
  id: number;
  firstname: string;
  lastname: string;
  username: string;
  start_hour?: string;
  duration?: number;
  grade: string;
  avatar:
    | 'wizard.png'
    | 'ladybug.png'
    | 'robot.png'
    | 'zebra.png'
    | 'cat.png'
    | 'cloud.png';
  sessions: Session[];
  password?: string;
}

export interface StudentWithSessions {
  id: number;
  firstname: string;
  avatar:
    | 'wizard.png'
    | 'ladybug.png'
    | 'robot.png'
    | 'zebra.png'
    | 'cat.png'
    | 'cloud.png';
  sessions: Session[];
}

export interface UpdateStudentDto {
  firstname?: string;
  lastname?: string;
  username?: string;
  password?: string;
  avatar?:
    | 'wizard.png'
    | 'ladybug.png'
    | 'robot.png'
    | 'zebra.png'
    | 'cat.png'
    | 'cloud.png';
  start_hour?: string;
  duration?: number;
}

type AvatarName =
  | 'wizard.png'
  | 'ladybug.png'
  | 'robot.png'
  | 'zebra.png'
  | 'cat.png'
  | 'cloud.png';
