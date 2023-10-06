import React, { useLayoutEffect, useState } from 'react';
import { View, Text, Pressable, } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';
import { fs, hs, vs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { fonts } from '../../../assets/fonts';
import { CodeField, Cursor, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Btn from '../../../components/Btn';
import { useDispatch } from 'react-redux';
import { otpVerifyApi } from '../../../features/authSlice';

const Verification = ({ route }) => {

    const navigation = useNavigation();
    const [value, setValue] = useState('');
    const dispatch = useDispatch();
    const { email, otp, password } = route?.params;


    const CELL_COUNT = 4;
    const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
    const [props, getCellOnLayoutHandler] = useClearByFocusCell({
        value,
        setValue,
    });
    const renderHeader = () => {
        return (
            <Header heading="Verification" onPress={() => navigation.goBack()} />
        )
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => {
                return renderHeader();
            }
        });
    }, []);

    const verificationHandler = async () => {

        let formData = new FormData();
        formData.append('email', route?.params?.email);
        formData.append('otp', value);
        formData.append('type', route?.params?.password);

        console.log(otp,"otp")

        const response = await dispatch(otpVerifyApi({ data: formData })).unwrap();
        console.log("responseOfOTP", response);

        if (response?.status == "Success") {
            navigation.navigate('SignIn');
        }
        else {
            console.log("otp error")
        }
    }
    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView>
                <View style={{ marginHorizontal: hs(15) }}>

                    <Text style={{ marginTop: vs(40), alignSelf: 'center', color: colors.Gray_text, fontSize: fs(18), fontFamily: fonts.regular }}>
                        Check your email for  the otp
                    </Text>

                    <View style={styles.root}>
                        <CodeField
                            ref={ref}
                            {...props}
                            value={value}
                            onChangeText={(txt) => setValue(txt)}
                            cellCount={CELL_COUNT}
                            rootStyle={styles.codeFieldRoot}
                            keyboardType="number-pad"
                            textContentType="oneTimeCode"
                            renderCell={({ index, symbol, isFocused }) => (
                                <Text
                                    key={index}
                                    style={[styles.cell, isFocused && styles.focusCell]}
                                    onLayout={getCellOnLayoutHandler(index)}>
                                    {symbol || (isFocused ? <Cursor /> : null)}
                                </Text>
                            )}
                        />
                    </View>

                    <Text style={{ marginTop: vs(30), alignSelf: 'center', color: colors.Gray_text, fontSize: fs(16), fontFamily: fonts.regular }}>Didn't receive a verification code?</Text>

                    <Pressable style={{ marginTop: vs(5), alignSelf: 'center' }}>
                        <Text style={{ alignSelf: 'center', color: colors.Light_Blue, fontFamily: fonts.bold, fontSize: fs(16), fontWeight: '700' }}>Resend the code</Text>
                    </Pressable>

                    <Btn onPress={verificationHandler}
                        title="Verify"
                        btnStyle={{ marginTop: vs(30) }}
                    />
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

export default Verification;
