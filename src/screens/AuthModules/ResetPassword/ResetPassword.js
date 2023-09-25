import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { hs, vs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { images } from '../../../assets/images';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { fonts } from '../../../assets/fonts';
import AnimatedInput from '../../../components/AnimatedInput';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Btn from '../../../components/Btn';
import { AppStack } from '../../../navigator/NavActions';

const ResetPassword = () => {

    const navigation = useNavigation();
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const renderHeader = () => {
        return (
            <Header heading="Reset Password" onPress={() => navigation.goBack()} />
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
                    <Image source={images.resetPswd}
                        style={{
                            height: vs(120),
                            width: hs(120),
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            marginTop: vs(30),
                        }} />

                    <AnimatedInput
                        placeholder={'New Password'}
                        containerStyle={{
                            backgroundColor: "white",
                            borderColor: colors.Gray_Border,
                            borderWidth: 1,
                            borderRadius: 4,
                            width: '100%'
                        }}
                        autoCapitalize='none'
                        height={52}
                        mpContainer={{ mt: 20 }}
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

                    <AnimatedInput
                        placeholder={'Confirm Password'}
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
                        rightIcon={() => <Ionicons name={!isConfirmPasswordVisible ? 'eye-off' : 'eye'} size={20} color={colors.Gray_Border} style={{ position: 'absolute', top: 15, right: 10 }}
                            onPress={() => {
                                setIsConfirmPasswordVisible((prev) => !prev);
                            }}
                        />}
                        secureTextEntry={!isConfirmPasswordVisible}
                    />

                    <Btn onPress={() => navigation.dispatch(AppStack)} title="Reset Password" btnStyle={{ marginTop: vs(25) }} />

                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
});

export default ResetPassword;
