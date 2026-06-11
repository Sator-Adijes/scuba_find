import React, { useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { useAuthStore } from '@/store/useAuthStore';

import { AuthNavigator } from './AuthNavigator';
import { MainNavigator } from './MainNavigator';

export function RootNavigator(): React.JSX.Element {
  const { isAuthenticated, isOnboarded, hydrate } = useAuthStore();

  useEffect(() => {
    hydrate();
  }, []);

  return (
    <NavigationContainer>
      {isAuthenticated ? <MainNavigator /> : <AuthNavigator isOnboarded={isOnboarded} />}
    </NavigationContainer>
  );
}
