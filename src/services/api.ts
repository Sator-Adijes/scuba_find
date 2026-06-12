import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.API_URL ?? 'https://api.scubafind.com',
  timeout: 15_000,
  headers: { 'Content-Type': 'application/json' },
});
