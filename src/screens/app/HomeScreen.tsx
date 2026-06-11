import React from 'react';

import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { useAuthStore } from '@/store/useAuthStore';

export function HomeScreen(): React.JSX.Element {
  const { user, logout } = useAuthStore();

  return (
    <View style={s.container}>
      <Text style={s.title}>Bonjour, {user?.name ?? 'Plongeur'} 🤿</Text>
      <Text style={s.sub}>Prêt à trouver votre prochain spot ?</Text>
      <TouchableOpacity style={s.logoutBtn} onPress={logout}>
        <Text style={s.logoutTxt}>Se déconnecter</Text>
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
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 8, color: '#0369a1' },
  sub: { fontSize: 16, color: '#6b7280', marginBottom: 48 },
  logoutBtn: {
    borderWidth: 1,
    borderColor: '#ef4444',
    padding: 14,
    borderRadius: 10,
    paddingHorizontal: 32,
  },
  logoutTxt: { color: '#ef4444', fontWeight: '600' },
});
