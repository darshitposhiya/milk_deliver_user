import React, { Component } from 'react';
import { Image, Platform } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from '../assets/colors/colors';
import { fonts } from '../assets/fonts';
import { getStatusBarHeight } from '../utility/Globals';
import Home from '../screens/AppModules/Home/Home';
import { images } from '../assets/images';
import Search from '../screens/AppModules/Search/Search';
import Favorites from '../screens/AppModules/Favorites/Favorites';
import Profile from '../screens/AppModules/Profile/Profile';
import { fs, hs, vs } from '../utility/ResponsiveStyle';
import Cart from '../screens/AppModules/Cart/Cart';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: colors.Light_Blue,
            tabBarInactiveTintColor: colors.Gray_text,
            headerStatusBarHeight: getStatusBarHeight(),
            headerShadowVisible: false,
            tabBarShowLabel: true,
            headerTitleStyle: {
                color: colors.white,
                fontSize: fs(18),
                fontFamily: fonts.bold,
            },
            headerTintColor: colors.Black,
            ...Platform.OS == 'android' && {
                tabBarLabelStyle: {
                    bottom: 5,
                    fontSize: 10,
                    fontFamily: fonts.bold
                },
                tabBarStyle: {
                    height: 68,
                    paddingHorizontal: 10
                }
            }
        }}>

            <Tab.Screen
                name="Home"
                component={Home}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Image
                                source={images.footer.home_active}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: colors.Light_Blue
                                }}
                            />
                        } else {
                            return <Image
                                source={images.footer.home_deactive}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: colors.Gray_Border
                                }}
                            />
                        }
                    },
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: colors.Primary_Blue
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'Home'
                })}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Image
                                source={images.footer.search_active}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: colors.Light_Blue
                                }}
                            />
                        } else {
                            return <Image
                                source={images.footer.search_deactive}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: colors.Gray_Border
                                }}
                            />
                        }
                    },
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: colors.Primary_Blue
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'Search'
                })}
            />
            <Tab.Screen
                name="Cart"
                component={Cart}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        return <Image
                            source={images.footer.cart}
                            style={{
                                width: vs(50),
                                height: hs(50),
                                resizeMode: 'contain',
                                marginBottom: vs(30),
                                borderWidth: 5,
                                borderColor: 'white',
                                borderRadius: 100
                            }}
                        />
                    },
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: colors.LightPurple
                    },
                    headerShadowVisible: false,
                    tabBarLabel: ''
                })}
            />
            <Tab.Screen
                name="Favorites"
                component={Favorites}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Image
                                source={images.footer.fav_active}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: colors.Light_Blue
                                }}
                            />
                        } else {
                            return <Image
                                source={images.footer.fav_deactive}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: colors.Gray_Border
                                }}
                            />
                        }
                    },
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: colors.Primary_Blue
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'Favorites'
                })}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={({ navigation }) => ({
                    tabBarIcon: ({ color, focused }) => {
                        if (focused) {
                            return <Image
                                source={images.footer.profile_active}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: colors.Light_Blue
                                }}
                            />
                        } else {
                            return <Image
                                source={images.footer.profile_deactive}
                                style={{
                                    height: vs(22),
                                    width: hs(22),
                                    resizeMode: 'contain',
                                    tintColor: colors.Gray_Border
                                }}
                            />
                        }
                    },
                    headerShown: true,
                    headerTitle: '',
                    headerStyle: {
                        backgroundColor: colors.Primary_Blue
                    },
                    headerShadowVisible: false,
                    tabBarLabel: 'Profile'
                })}
            />
        </Tab.Navigator>
    );
};


export default Tabs;
