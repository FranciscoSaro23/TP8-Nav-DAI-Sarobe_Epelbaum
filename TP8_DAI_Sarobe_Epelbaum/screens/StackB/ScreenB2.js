// screens/StackB/ScreenB2.js
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { styles } from '../../components/SharedStyles';

export default function ScreenB2() {
  const navigation = useNavigation();
  const route = useRoute();
  const { name, phone } = route.params || {};

  return (
    <View style={[styles.container, { backgroundColor: 'white' }]}> 
      <Text style={styles.text}>Hola <Text style={{ color: 'red' }}>{name}</Text></Text>
      <Text style={styles.text}>Tu teléfono es <Text style={{ color: 'blue' }}>{phone}</Text></Text>

      <TouchableOpacity style={styles.pressable} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>VOLVER</Text>
      </TouchableOpacity>
    </View>
  );
}
