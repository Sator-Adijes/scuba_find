import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';
import { storage, KEYS } from '@/utils/storage';

export const api = axios.create({
  baseURL: process.env.API_URL ?? 'https://api.scubafind.com',
  timeout: 15_000,
  headers: { 'Content-Type': 'application/json' },
});

api.interceptors.request.use(async (config: InternalAxiosRequestConfig) => {
  const token = await storage.get<string>(KEYS.ACCESS_TOKEN);
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

api.interceptors.response.use(
  res => res,
  async (error: AxiosError) => {
    if (error.response?.status === 401) {
      await storage.clear();
    }
    return Promise.reject(error);
  },
);
