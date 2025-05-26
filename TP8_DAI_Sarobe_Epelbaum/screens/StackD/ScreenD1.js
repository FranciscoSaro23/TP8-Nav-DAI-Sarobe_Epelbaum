// screens/StackD/ScreenD1.js
import React from 'react';
import { View, Text, Button, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../components/SharedStyles';

export default function ScreenD1() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: 'lightgreen' }]}> 
      <Text style={styles.text}>Pantalla D1</Text>
      <Pressable onPress={() => navigation.navigate('ScreenD2')}>
      <Image
        source={require('../../assets/settings.jpg')}
      />
      </Pressable>
    </View>
  );
}
