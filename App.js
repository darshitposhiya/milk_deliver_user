import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import AppContainer from './src/navigator';
import { colors } from './src/assets/colors/colors';
import SplashScreen from 'react-native-splash-screen';
import { Provider } from 'react-redux';
import persistStore from 'redux-persist/es/persistStore';
import { PersistGate } from 'redux-persist/integration/react';
import { store } from './src/store/store';

const App = () => {

  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor} >
        <NavigationContainer onReady={() => { SplashScreen.hide() }}>
          <StatusBar barStyle="light-content" backgroundColor={colors.Primary_Blue} translucent={true} />
          <AppContainer />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
