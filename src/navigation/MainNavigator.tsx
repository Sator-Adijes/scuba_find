import React from 'react';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { HomeScreen } from '@/screens/app/HomeScreen';
import { AccountScreen } from '@/screens/app/AccountScreen';

const Tab = createBottomTabNavigator();

export const MainNavigator = (): React.JSX.Element => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Account" component={AccountScreen} />
  </Tab.Navigator>
);
