// screens/StackC/ScreenC2.js
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from '../../components/SharedStyles';

export default function ScreenC2() {
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: 'gold' }]}> 
      <Text style={styles.text}>Contador: {count}</Text>
      <Button title="Sumar 1" onPress={() => setCount(count + 1)} />
    </View>
  );
}
