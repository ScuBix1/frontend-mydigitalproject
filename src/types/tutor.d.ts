type UpdateTutorDto = {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
};

interface Tutor {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
}

type AuthPayload = {
  id: number;
  username: string;
  customer_id?: string;
  role: 'tutor' | 'admin' | 'student';
  iat: number;
  exp: number;
};

type AuthContextType = {
  token?: string;
  user?: AuthPayload;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => void;
  logout: () => void;
};
