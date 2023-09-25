import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AppContainer from './src/navigator';
import { colors } from './src/assets/colors/colors';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  return (
    <NavigationContainer onReady={() => { SplashScreen.hide() }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.Primary_Blue} translucent={true} />
      <AppContainer />
    </NavigationContainer>
  );
};

export default App;
