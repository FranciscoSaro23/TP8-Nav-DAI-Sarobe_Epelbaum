// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';

import ScreenA1 from './screens/StackA/ScreenA1';
import ScreenA2 from './screens/StackA/ScreenA2';
import ScreenB1 from './screens/StackB/ScreenB1';
import ScreenB2 from './screens/StackB/ScreenB2';
import ScreenC1 from './screens/StackC/ScreenC1';
import ScreenC2 from './screens/StackC/ScreenC2';
import ScreenD1 from './screens/StackD/ScreenD1';
import ScreenD2 from './screens/StackD/ScreenD2';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackANavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenA1" component={ScreenA1} />
      <Stack.Screen name="ScreenA2" component={ScreenA2} />
    </Stack.Navigator>
  );
}

function StackBNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenB1" component={ScreenB1} />
      <Stack.Screen name="ScreenB2" component={ScreenB2} />
    </Stack.Navigator>
  );
}

function StackCNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenC1" component={ScreenC1} />
      <Stack.Screen name="ScreenC2" component={ScreenC2} />
    </Stack.Navigator>
  );
}

function StackDNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenD1" component={ScreenD1} />
      <Stack.Screen name="ScreenD2" component={ScreenD2} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Search') iconName = 'search';
          else if (route.name === 'Button') iconName = 'button';
          else if (route.name === 'Settings') iconName = 'settings';
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}>
        <Tab.Screen name="Home" component={StackANavigator} />
        <Tab.Screen name="Search" component={StackBNavigator} />
        <Tab.Screen name="Button" component={StackCNavigator} />
        <Tab.Screen name="Settings" component={StackDNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
