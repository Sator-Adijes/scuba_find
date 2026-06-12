import React from 'react';

import { NavigationContainer } from '@react-navigation/native';

import { MainNavigator } from './MainNavigator';

export const RootNavigator = (): React.JSX.Element => {
  return (
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
  );
}
