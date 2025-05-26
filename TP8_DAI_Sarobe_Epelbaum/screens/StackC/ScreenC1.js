// screens/StackC/ScreenC1.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../components/SharedStyles';

export default function ScreenC1() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: 'gold' }]}> 
      <Text style={styles.text}>Pantalla C1</Text>
      <Button
        title="Ir a C2"
        onPress={() => navigation.navigate('ScreenC2')}
      />
    </View>
  );
}
