import React, { Component } from 'react';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthStack from './Auth';
import AppStack from './UnAuth';

const AppContainer = () => {

    const RootStack = createNativeStackNavigator();
    return (
        <RootStack.Navigator screenOptions={{ headerShown: false, animation: 'none' }} >
            <RootStack.Screen
                name="AuthStack"
                component={AuthStack}
            />

            <RootStack.Screen
                name="AppStack"
                component={AppStack}
            />

        </RootStack.Navigator>
    );
};

export default AppContainer;
