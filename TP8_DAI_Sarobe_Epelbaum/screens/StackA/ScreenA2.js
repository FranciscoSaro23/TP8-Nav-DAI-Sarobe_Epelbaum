// screens/StackA/ScreenA2.js
import React from 'react';
import { View, Text, Image } from 'react-native';
import { styles } from '../../components/SharedStyles';

export default function ScreenA2() {
  return (
    <View style={[styles.container, { backgroundColor: 'pink' }]}> 
    <Image 
        source={require('../../assets/Egg.webp')}
        style={{ width: 200, height: 200 }} 
      />
      <Text>Easter Egg</Text>
    </View>
  );
}
