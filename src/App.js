import * as React from 'react';
import Router from './router';
import {NavigationContainer} from '@react-navigation/native';

import * as RN from 'react-native';
import {DarkTheme, DefaultTheme} from '@react-navigation/native';

let cs = RN.useColorScheme;
let isDark = cs === 'dark';
let theme = isDark ? DarkTheme : DefaultTheme;

function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;
