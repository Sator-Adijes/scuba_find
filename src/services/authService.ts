import type { AuthTokens, User } from '@/types';

import { api } from './api';

interface LoginPayload {
  email: string;
  password: string;
}
interface RegisterPayload {
  name: string;
  email: string;
  password: string;
}
interface AuthResponse {
  tokens: AuthTokens;
  user: User;
}

export const authService = {
  login: (p: LoginPayload) => api.post<AuthResponse>('/auth/login', p).then(r => r.data),
  register: (p: RegisterPayload) => api.post<AuthResponse>('/auth/register', p).then(r => r.data),
  refreshToken: (token: string) =>
    api.post<AuthTokens>('/auth/refresh', { refreshToken: token }).then(r => r.data),
  logout: () => api.post('/auth/logout'),
  me: () => api.get<User>('/auth/me').then(r => r.data),
};
