import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { fonts } from '../assets/fonts';
import AppIntro from '../screens/AuthModules/AppIntro/AppIntro';
import LoginOption from '../screens/AuthModules/LoginOption/LoginOption';
import CreateAccount from '../screens/AuthModules/CreateAccount/CreateAccount';
import Terms from '../screens/AuthModules/Terms/Terms';
import Verification from '../screens/AuthModules/Verification/Verification';
import SignIn from '../screens/AuthModules/SignIn/SignIn';
import ForgotPassword from '../screens/AuthModules/ForgotPassword/ForgotPassword';
import ResetPassword from '../screens/AuthModules/ResetPassword/ResetPassword';

const Stack = createNativeStackNavigator();
const AuthStack = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                animation: 'slide_from_right',
                headerBackTitleVisible: false,
                headerShown: false,
                headerShadowVisible: false,
                headerTitleStyle: {
                    fontFamily: fonts.bold
                },
                contentStyle: {
                    backgroundColor: 'white'
                },
            }}>

            <Stack.Screen
                name='AppIntro'
                component={AppIntro}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='LoginOption'
                component={LoginOption}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name='CreateAccount'
                component={CreateAccount}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <Stack.Screen
                name='Terms'
                component={Terms}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <Stack.Screen
                name='Verification'
                component={Verification}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <Stack.Screen
                name='SignIn'
                component={SignIn}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <Stack.Screen
                name='ForgotPassword'
                component={ForgotPassword}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <Stack.Screen
                name='ResetPassword'
                component={ResetPassword}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

        </Stack.Navigator>
    );
};

export default AuthStack;
