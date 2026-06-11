import React, { useState } from 'react';
import {
  View, Text, TextInput, TouchableOpacity,
  StyleSheet, ActivityIndicator, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useAuthStore } from '@/store/useAuthStore';

export default function RegisterScreen() {
  const nav = useNavigation<any>();
  const { register, isLoading, error, clearError } = useAuthStore();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submit = async () => {
    if (!name || !email || !password) return Alert.alert('Erreur', 'Veuillez remplir tous les champs');
    clearError();
    await register(name, email, password);
  };

  return (
    <View style={s.container}>
      <Text style={s.title}>Créer un compte</Text>
      {!!error && <Text style={s.error}>{error}</Text>}
      <TextInput style={s.input} placeholder="Nom complet" value={name} onChangeText={setName} />
      <TextInput
        style={s.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        keyboardType="email-address"
      />
      <TextInput
        style={s.input}
        placeholder="Mot de passe"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={s.btn} onPress={submit} disabled={isLoading}>
        {isLoading
          ? <ActivityIndicator color="#fff" />
          : <Text style={s.btnTxt}>S'inscrire</Text>}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => nav.navigate('Login')}>
        <Text style={s.link}>Déjà un compte ? Se connecter</Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 24, backgroundColor: '#fff' },
  title:     { fontSize: 28, fontWeight: 'bold', marginBottom: 32, textAlign: 'center', color: '#0369a1' },
  error:     { color: '#ef4444', marginBottom: 12, textAlign: 'center' },
  input:     { borderWidth: 1, borderColor: '#e5e7eb', borderRadius: 10, padding: 14, marginBottom: 16, fontSize: 16 },
  btn:       { backgroundColor: '#0369a1', padding: 16, borderRadius: 12, alignItems: 'center', marginTop: 8 },
  btnTxt:    { color: '#fff', fontSize: 16, fontWeight: '600' },
  link:      { textAlign: 'center', marginTop: 20, color: '#0369a1', fontSize: 14 },
});
