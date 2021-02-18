/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet, ScrollView, View, Text } from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import AppNavigation from './src/config/navigation'
function App(){
  return (
    <AppNavigation />
/* <View>
  <Text>Ghulam Qadir</Text>
</View> */
    );
    }
export default App;
