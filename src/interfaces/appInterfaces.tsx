export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  authToken: string;
  user: User;
}

export interface User {
  id: number;
  created_at: number;
  name: string;
  email: string;
  password: string;
  img?: string;
}
