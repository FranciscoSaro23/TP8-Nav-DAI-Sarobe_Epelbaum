// screens/StackB/ScreenB1.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../components/SharedStyles';

export default function ScreenB1() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const navigation = useNavigation();

  const handleConfirm = () => {
    if (!name.trim()) {
      Alert.alert('Error', 'El nombre no puede estar vacío.');
      return;
    }
    if (!phone.trim() || phone.length <= 8 || !/^[0-9]+$/.test(phone)) {
      Alert.alert('Error', 'El teléfono debe tener más de 8 dígitos numéricos.');
      return;
    }
    navigation.navigate('ScreenB2', { name, phone });
  };

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}> 
      <Text style={styles.text}>Nombre</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} />

      <Text style={styles.text}>Teléfono</Text>
      <TextInput style={styles.input} value={phone} onChangeText={setPhone} keyboardType="phone-pad" />

      <TouchableOpacity style={styles.button} onPress={handleConfirm}>
        <Text style={styles.buttonText}>CONFIRMAR</Text>
      </TouchableOpacity>
    </View>
  );
}