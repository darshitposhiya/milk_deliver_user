import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';

const RootStack = createNativeStackNavigator();

const AppStack = () => {
    return (
        <RootStack.Navigator>
            <RootStack.Screen
                name='Tabs'
                component={Tabs}
                options={{
                    headerShown: false,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />
        </RootStack.Navigator>
    );
};

export default AppStack;
