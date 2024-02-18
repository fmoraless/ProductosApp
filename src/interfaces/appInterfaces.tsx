export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  authToken: string;
  user: User;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  authToken: string;
  user: RegisteredUser;
}

export interface RegisteredUser {
  id: number;
  name: string;
  email: string;
  location: string;
  created_at: number;
}

export interface User {
  id: number;
  created_at: number;
  name: string;
  email: string;
  password: string;
  img?: string;
}
