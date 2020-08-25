/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {Provider as StateProvider} from 'react-redux';
import store from './src/redux/store';
import MainStackNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <StateProvider store={store}>
      <MainStackNavigator />
    </StateProvider>
  );
}
