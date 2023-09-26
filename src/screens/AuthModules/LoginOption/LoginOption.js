import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { colors } from '../../../assets/colors/colors';
import { images } from '../../../assets/images';
import { screenHeight, screenWidth, vs, hs } from '../../../utility/ResponsiveStyle';
import Btn from '../../../components/Btn';
import { fonts } from '../../../assets/fonts';
import { useNavigation } from '@react-navigation/native';

const LoginOption = () => {

    const navigation = useNavigation();
    
    return (
        <View style={styles.container}>
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ marginHorizontal:hs(15), paddingBottom: vs(20) }}>
                    <Image source={images.app_logo}
                        style={{
                            height: screenHeight * 0.30,
                            width: screenWidth * 0.60,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            marginTop: vs(30),
                        }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: screenWidth * 0.60, alignSelf: 'center', marginTop: vs(10) }}>
                        <View style={{ width: screenWidth * 0.25, opacity: 0.5, borderWidth: 1, borderColor: colors.Gray_Border }} />
                        <View style={{ width: 10, height: 10, backgroundColor: colors.Gray_Border, transform: [{ rotate: '140deg' }] }} />
                        <View style={{ width: screenWidth * 0.25, opacity: 0.5, borderWidth: 1, borderColor: colors.Gray_Border }} />
                    </View>

                    <Btn onPress={() => navigation.navigate('CreateAccount')}
                        title="Create an account"
                        btnStyle={{ marginTop: vs(30) }} />

                    <Btn title="Sign In" onPress={()=>navigation.navigate('SignIn')}
                        btnStyle={{ marginTop: vs(10), backgroundColor: colors.Light_Blue }} />

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: vs(50),width:'100%' }}>
                        <View style={{ width: '33%', opacity: 0.5, borderWidth: 1, borderColor: colors.Gray_Border }} />
                        <Text style={{ color: colors.Gray_text, fontFamily: fonts.regular }}>Or sign in with</Text>
                        <View style={{ width: '33%', opacity: 0.5, borderWidth: 1, borderColor: colors.Gray_Border }} />
                    </View>

                    <Btn title="Continue with Google"
                        btnStyle={{ marginTop: vs(30), backgroundColor: 'red', justifyContent: 'flex-start' }}
                        leftIcon={() => (
                            <>
                                <Image source={images.google_icon} style={{ height: vs(35), width: hs(35), marginHorizontal: hs(15), resizeMode: 'contain', alignItems: 'flex-start' }} />
                            </>
                        )} />

                    <Btn title="Continue with Facebook"
                        btnStyle={{ marginTop: vs(10), backgroundColor: colors.Nevy_Blue, justifyContent: 'flex-start' }}
                        leftIcon={() => (
                            <>
                                <Image source={images.facebook_icon} style={{ height: vs(35), width: hs(35), marginHorizontal: hs(15), resizeMode: 'contain', alignItems: 'flex-start' }} />
                            </>
                        )} />

                    <Btn title="Continue with Apple"
                        btnStyle={{ marginTop: vs(10), backgroundColor: 'black', justifyContent: 'flex-start' }}
                        leftIcon={() => (
                            <>
                                <Image source={images.apple_icon} style={{ height: vs(35), width: hs(35), marginHorizontal: hs(15), resizeMode: 'contain', alignItems: 'flex-start' }} />
                            </>
                        )} />

                </View>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
});

export default LoginOption;
