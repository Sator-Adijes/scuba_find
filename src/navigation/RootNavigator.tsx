import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { MainNavigator } from './MainNavigator';

export function RootNavigator(): React.JSX.Element {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
