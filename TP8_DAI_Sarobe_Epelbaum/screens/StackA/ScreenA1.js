// screens/StackA/ScreenA1.js
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from '../../components/SharedStyles';

export default function ScreenA1() {
  const navigation = useNavigation();

  return (
    <View style={[styles.container, { backgroundColor: 'pink' }]}> 
      <Button
        title="No Tocar"
        onPress={() => navigation.navigate('ScreenA2')}
      />
    </View>
  );
}
