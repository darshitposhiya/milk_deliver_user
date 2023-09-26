import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Home from '../screens/AppModules/Home/Home';
import ProductDetail from '../screens/AppModules/ProductDetail/ProductDetail';
import Subscribe from '../screens/AppModules/Subscribe/Subscribe';
import PaymentMethod from '../screens/AppModules/PaymentMethod/PaymentMethod';

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

            <RootStack.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='ProductDetail'
                component={ProductDetail}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='Subscribe'
                component={Subscribe}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='PaymentMethod'
                component={PaymentMethod}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />
        </RootStack.Navigator>
    );
};

export default AppStack;
