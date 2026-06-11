import React from 'react';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { LoginScreen } from '@/screens/auth/LoginScreen';
import { OnboardingScreen } from '@/screens/auth/OnboardingScreen';
import { RegisterScreen } from '@/screens/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

export const AuthNavigator = ({ isOnboarded }: { isOnboarded: boolean }): React.JSX.Element => (
  <Stack.Navigator
    initialRouteName={isOnboarded ? 'Login' : 'Onboarding'}
    screenOptions={{ headerShown: false }}
  >
    <Stack.Screen name="Onboarding" component={OnboardingScreen} />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
  </Stack.Navigator>
);
