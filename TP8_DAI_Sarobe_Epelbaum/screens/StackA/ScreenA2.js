// screens/StackA/ScreenA2.js
import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../components/SharedStyles';

export default function ScreenA2() {
  return (
    <View style={[styles.container, { backgroundColor: 'pink' }]}> 
      <Text style={styles.text}>Pantalla A2</Text>
    </View>
  );
}
