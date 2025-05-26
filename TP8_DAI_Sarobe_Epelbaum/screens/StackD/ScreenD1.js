// screens/StackD/ScreenD1.js
import React from 'react';
import { View, Text, Button, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../components/SharedStyles';

export default function ScreenD1() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: 'lightgreen' }]}> 
      <Text style={styles.text}>Pantalla D1</Text>
      <Image
        source={{ uri: 'https://placekitten.com/200/200' }}
        style={{ width: 200, height: 200, marginBottom: 20 }}
      />
      <Button title="Ir a D2" onPress={() => navigation.navigate('ScreenD2')} />
    </View>
  );
}
