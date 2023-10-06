import React, { Component } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Home from '../screens/AppModules/Home/Home';
import ProductDetail from '../screens/AppModules/ProductDetail/ProductDetail';
import Subscribe from '../screens/AppModules/Subscribe/Subscribe';
import PaymentMethod from '../screens/AppModules/PaymentMethod/PaymentMethod';
import Category from '../screens/AppModules/Category/Category';
import Checkout from '../screens/AppModules/Checkout/Checkout';
import Filter from '../screens/AppModules/Filter/Filter';
import Address from '../screens/AppModules/Address/Address';
import AddNewAddress from '../screens/AppModules/AddNewAddress/AddNewAddress';
import EditProfile from '../screens/AppModules/EditProfile/EditProfile';
import MyOrders from '../screens/AppModules/MyOrders/MyOrders';
import OrderDetail from '../screens/AppModules/OrderDetail/OrderDetail';
import MySubscriptions from '../screens/AppModules/MySubscriptions/MySubscriptions';
import MyWallet from '../screens/AppModules/MyWallet/MyWallet';
import MyNotifications from '../screens/AppModules/MyNotifications/MyNotifications';
import MyLanguage from '../screens/AppModules/MyLanguage/MyLanguage';
import Help from '../screens/AppModules/Help/Help';
import SearchScreen from '../screens/AppModules/SearchScreen/SearchScreen';
import BuyAgain from '../screens/AppModules/BuyAgain/BuyAgain';
import TrackOrder from '../screens/AppModules/TrackOrder/TrackOrder';
import AddNewCard from '../screens/AppModules/AddNewCard/AddNewCard';
import RatingAndReview from '../screens/AppModules/RatingAndReview/RatingAndReview';

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
                name='Filter'
                component={Filter}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='Category'
                component={Category}
                options={{
                    headerShown: false,
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

            <RootStack.Screen
                name='AddNewCard'
                component={AddNewCard}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='Checkout'
                component={Checkout}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='Address'
                component={Address}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='AddNewAddress'
                component={AddNewAddress}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />
            <RootStack.Screen
                name='EditProfile'
                component={EditProfile}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='MyOrders'
                component={MyOrders}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='OrderDetail'
                component={OrderDetail}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='TrackOrder'
                component={TrackOrder}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='RatingAndReview'
                component={RatingAndReview}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='BuyAgain'
                component={BuyAgain}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='MySubscriptions'
                component={MySubscriptions}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='MyNotifications'
                component={MyNotifications}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='MyWallet'
                component={MyWallet}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='MyLanguage'
                component={MyLanguage}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='Help'
                component={Help}
                options={{
                    headerShown: true,
                    headerShadowVisible: false,
                    headerTitle: '',
                }}
            />

            <RootStack.Screen
                name='SearchScreen'
                component={SearchScreen}
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
