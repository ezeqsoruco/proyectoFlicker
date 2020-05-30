/**
 * @format
 */
import React from 'react';

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import AlbumList from './src/components/AlbumList';
import PhotoList from './src/components/PhotoList';
import CommentList from './src/components/CommentList';
import {Router, Scene, Stack} from 'react-native-router-flux';

// Create a component
const App = () => (
  <Router>
    <Stack key="root">
      <Scene
        key="albumList"
        component={AlbumList}
        title="Albums"
        initial={true}
      />
      <Scene key="photoList" component={PhotoList} title="Fotos" />
      <Scene key="commentList" component={CommentList} title="Comentarios" />
    </Stack>
  </Router>
)

AppRegistry.registerComponent(appName, () => App);