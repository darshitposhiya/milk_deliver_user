import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { hs, screenHeight, screenWidth, vs, fs } from '../../../utility/ResponsiveStyle';
import { images } from '../../../assets/images';
import { colors } from '../../../assets/colors/colors';
import AnimatedInput from '../../../components/AnimatedInput';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Btn from '../../../components/Btn';
import { fonts } from '../../../assets/fonts';

const SignIn = () => {

    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const renderHeader = () => {
        return (
            <Header heading="Sign in" onPress={() => navigation.goBack()} />
        )
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => {
                return renderHeader();
            }
        });
    }, []);
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: hs(15) }}>

                    <Image source={images.app_logo}
                        style={{
                            height: screenHeight * 0.15,
                            width: screenWidth * 0.40,
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            marginTop: vs(10),
                        }} />

                    <AnimatedInput
                        placeholder={'Your Email'}
                        containerStyle={{
                            backgroundColor: "white",
                            borderColor: colors.Gray_Border,
                            borderWidth: 1,
                            borderRadius: 4,
                            width: '100%'
                        }}
                        keyboardType={'email-address'}
                        autoCapitalize='none'
                        height={52}
                        mpContainer={{ mt: 15 }}
                        mpInput={{ ph: 10 }}
                        inputStyle={{ color: colors.black }}
                        textSize={14}
                    />

                    <AnimatedInput
                        placeholder={'Password'}
                        containerStyle={{
                            backgroundColor: "white",
                            borderColor: colors.Gray_Border,
                            borderWidth: 1,
                            borderRadius: 4,
                            width: '100%'
                        }}
                        autoCapitalize='none'
                        height={52}
                        mpContainer={{ mt: 15 }}
                        mpInput={{ ph: 10 }}
                        inputStyle={{ color: colors.black }}
                        textSize={14}
                        rightIcon={() => <Ionicons name={!isPasswordVisible ? 'eye-off' : 'eye'} size={20} color={colors.Gray_Border} style={{ position: 'absolute', top: 15, right: 10 }}
                            onPress={() => {
                                setIsPasswordVisible((prev) => !prev);
                            }}
                        />}
                        secureTextEntry={!isPasswordVisible}
                    />

                    <Btn title="Sign In" btnStyle={{ marginTop: vs(25) }} />

                    <Pressable onPress={() => navigation.navigate('ForgotPassword')}>
                        <Text style={{ alignSelf: 'center', marginTop: vs(20), color: colors.black, fontFamily: fonts.regular, fontSize: fs(18) }}>Forgot Password?</Text>
                    </Pressable>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: vs(40), width: '100%' }}>
                        <View style={{ width: '33%', opacity: 0.5, borderWidth: 1, borderColor: colors.Gray_Border }} />
                        <Text style={{ color: colors.Gray_text, fontFamily: fonts.regular }}>Or sign in with</Text>
                        <View style={{ width: '33%', opacity: 0.5, borderWidth: 1, borderColor: colors.Gray_Border }} />
                    </View>

                    <Btn title="Continue with Google"
                        btnStyle={{ marginTop: vs(20), backgroundColor: 'red', justifyContent: 'flex-start' }}
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
            </KeyboardAwareScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default SignIn;
