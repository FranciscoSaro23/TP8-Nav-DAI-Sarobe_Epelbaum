// screens/StackD/ScreenD2.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../components/SharedStyles';

export default function ScreenD2() {
  return (
    <View style={[styles.container, { backgroundColor: 'lightgreen' }]}> 
      <Text>Tocaste las Fake Settings, has decifrado el boton secreto!</Text>
      <Text style={styles.text}>Felicidades!</Text>
    </View>
  );
}
