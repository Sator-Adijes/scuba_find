import AsyncStorage from '@react-native-async-storage/async-storage';

export const storage = {
  async get<T>(key: string): Promise<T | null> {
    try {
      const v = await AsyncStorage.getItem(key);
      return v ? (JSON.parse(v) as T) : null;
    } catch {
      return null;
    }
  },
  async set(key: string, value: unknown): Promise<void> {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  async remove(key: string): Promise<void> {
    await AsyncStorage.removeItem(key);
  },
  async clear(): Promise<void> {
    await AsyncStorage.clear();
  },
};

export const KEYS = {
  ACCESS_TOKEN:  '@auth/accessToken',
  REFRESH_TOKEN: '@auth/refreshToken',
  USER:          '@auth/user',
  ONBOARDED:     '@app/onboarded',
} as const;
