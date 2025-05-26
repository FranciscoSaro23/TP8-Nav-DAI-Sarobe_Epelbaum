// screens/StackD/ScreenD2.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../components/SharedStyles';

export default function ScreenD2() {
  return (
    <View style={[styles.container, { backgroundColor: 'lightgreen' }]}> 
      <Text style={styles.text}>Pantalla D2</Text>
      <Image
        source={{ uri: 'https://placebear.com/200/200' }}
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
