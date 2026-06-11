import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useAuthStore } from '@/store/useAuthStore';

export function OnboardingScreen(): React.JSX.Element {
  const { setOnboarded } = useAuthStore();

  return (
    <View style={s.container}>
      <Text style={s.title}>Bienvenue sur ScubaFind</Text>
      <Text style={s.sub}>Trouvez les meilleurs spots de plongée autour de vous</Text>
      <TouchableOpacity style={s.btn} onPress={setOnboarded}>
        <Text style={s.btnTxt}>Commencer</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'center',
    color: '#0369a1',
  },
  sub: { fontSize: 16, color: '#6b7280', marginBottom: 48, textAlign: 'center' },
  btn: { backgroundColor: '#0369a1', paddingVertical: 16, paddingHorizontal: 48, borderRadius: 12 },
  btnTxt: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
