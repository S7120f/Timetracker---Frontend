export interface User {
    data: any;
    status: number;
    id: number;
    username: string;
    password: string;
    role: string;
}

export interface LoginRequest {
    username: string;
    password: string;
  }