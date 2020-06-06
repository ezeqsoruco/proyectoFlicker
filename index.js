/**
 * @format
 */
import React from 'react';

import { AppRegistry } from 'react-native';
import { name as appName } from './app.json';
import AlbumList from './src/components/AlbumList';
import PhotoList from './src/components/PhotoList';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import CommentList from './src/components/CommentList';
import Configuration from './src/components/Configuration';

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#DFDEDE',
  },
};
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Albums" component={AlbumList} option={{ title: 'Albums' }} />
      <Stack.Screen name="Photos" component={PhotoList} option={{ title: 'Photos' }} />
      <Stack.Screen name="Comments" component={CommentList} option={{ title: 'Comentarios' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  console.disableYellowBox = true;
  return (
    <NavigationContainer theme={MyTheme}>
      <MyStack />
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => App);