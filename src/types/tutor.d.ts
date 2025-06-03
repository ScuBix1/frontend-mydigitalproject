export type UpdateTutorDto = {
  firstname?: string;
  lastname?: string;
  email?: string;
  password?: string;
};

export interface Tutor {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  password?: string;
}
