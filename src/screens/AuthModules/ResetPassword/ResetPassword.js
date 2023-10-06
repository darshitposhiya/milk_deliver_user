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
import { Formik } from 'formik';
import { resetPasswordValidate } from '../../../utility/Validations';
import { useDispatch } from 'react-redux';
import { resetPasswordApi } from '../../../features/authSlice';

const ResetPassword = ({ route }) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
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

    const resetPasswordHandler = async (values) => {
        let formData = new FormData();
        formData.append('email', route?.params?.email);
        formData.append('password', values.password);

        const response = await dispatch(resetPasswordApi({ data: formData })).unwrap();
        console.log("responseOfResetPassword", response);

        if (response?.status == "Success") {
            navigation.navigate('SignIn');
        }
    }

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

                    <Formik
                        initialValues={resetPasswordValidate.initialState}
                        validationSchema={resetPasswordValidate.schema}
                        onSubmit={(values) => resetPasswordHandler(values)}
                    >
                        {({ values, setFieldTouched, handleChange, handleSubmit, errors, touched }) => (
                            <>

                                <AnimatedInput
                                    placeholder={'New Password'}
                                    value={values.password}
                                    onChangeText={handleChange("password")}
                                    onBlur={() => setFieldTouched('password')}
                                    touched={touched.password}
                                    errors={errors.password}
                                    inputStyle={{ color: colors.black }}
                                    containerStyle={{
                                        backgroundColor: "white",
                                        borderColor: touched.password && errors.password ? 'red' : colors.Gray_Border,
                                        borderWidth: 1,
                                        borderRadius: 4,
                                        width: '100%'
                                    }}
                                    autoCapitalize='none'
                                    height={52}
                                    mpContainer={{ mt: 25 }}
                                    mpInput={{ ph: 10 }}
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
                                    value={values.confirmPassword}
                                    onChangeText={handleChange("confirmPassword")}
                                    onBlur={() => setFieldTouched('confirmPassword')}
                                    touched={touched.confirmPassword}
                                    errors={errors.confirmPassword}
                                    inputStyle={{ color: colors.black }}
                                    containerStyle={{
                                        backgroundColor: "white",
                                        borderColor: touched.confirmPassword && errors.confirmPassword ? 'red' : colors.Gray_Border,
                                        borderWidth: 1,
                                        borderRadius: 4,
                                        width: '100%'
                                    }}
                                    autoCapitalize='none'
                                    height={52}
                                    mpContainer={{ mt: 15 }}
                                    mpInput={{ ph: 10 }}
                                    textSize={14}
                                    rightIcon={() => <Ionicons name={!isConfirmPasswordVisible ? 'eye-off' : 'eye'} size={20} color={colors.Gray_Border} style={{ position: 'absolute', top: 15, right: 10 }}
                                        onPress={() => {
                                            setIsConfirmPasswordVisible((prev) => !prev);
                                        }}
                                    />}
                                    secureTextEntry={!isConfirmPasswordVisible}
                                />

                                <Btn onPress={handleSubmit}
                                    title="Reset Password"
                                    btnStyle={{ marginTop: vs(25) }}
                                />
                            </>
                        )}
                    </Formik>

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
