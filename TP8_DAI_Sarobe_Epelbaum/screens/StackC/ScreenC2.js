// screens/StackC/ScreenC2.js
import React, { useState } from 'react';
import { View, Text, Button, Pressable } from 'react-native';
import { styles } from '../../components/SharedStyles';

export default function ScreenC2() {
  const [count, setCount] = useState(0);

  return (
    <View style={[styles.container, { backgroundColor: 'gold' }]}> 
      <Text style={styles.text}>{count}</Text>
      <Pressable style={styles.pressable} onPress={() => setCount(count + 1)}>
      <Text>PRESS ME</Text>
      </Pressable>
    </View>
  );
}
