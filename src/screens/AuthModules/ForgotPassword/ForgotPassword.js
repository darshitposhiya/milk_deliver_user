import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { fs, hs, vs } from '../../../utility/ResponsiveStyle';
import { images } from '../../../assets/images';
import { colors } from '../../../assets/colors/colors';
import { fonts } from '../../../assets/fonts';
import AnimatedInput from '../../../components/AnimatedInput';
import Btn from '../../../components/Btn';
import { Formik } from 'formik';
import { forgotPasswordValidate } from '../../../utility/Validations';
import { useDispatch } from 'react-redux';
import { forgotPasswordApi } from '../../../features/authSlice';

const ForgotPassword = () => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const renderHeader = () => {
        return (
            <Header heading="Forgot Password" onPress={() => navigation.goBack()} />
        )
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            header: () => {
                return renderHeader();
            }
        });
    }, []);

    const forgotPasswordHandler = async (values) => {
        let formData = new FormData();
        formData.append('email', values.email);

        const response = await dispatch(forgotPasswordApi({ data: formData })).unwrap();
        console.log("responseOfForgotPassword", response);

        if (response?.status == "Success") {
            navigation.navigate("ResetPassword",{
                email: values.email
            });
        }
    }

    return (
        <View style={styles.container}>
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: hs(15) }}>

                    <Image source={images.emailLogo}
                        style={{
                            height: vs(150),
                            width: hs(150),
                            resizeMode: 'contain',
                            alignSelf: 'center',
                            marginTop: vs(20)
                        }} />

                    <Text style={{ marginTop: vs(10), alignSelf: 'center', fontSize: fs(16), fontFamily: fonts.regular, color: colors.black, textAlign: 'center' }}>Enter Your email below and  we will send you a reset email.</Text>

                    <Formik
                        initialValues={forgotPasswordValidate.initialState}
                        validationSchema={forgotPasswordValidate.schema}
                        onSubmit={(values) => forgotPasswordHandler(values)}
                    >
                        {({ values, setFieldTouched, handleChange, handleSubmit, errors, touched }) => (
                            <>
                                <AnimatedInput
                                    placeholder={'Email'}
                                    value={values.email}
                                    onChangeText={handleChange("email")}
                                    onBlur={() => setFieldTouched('email')}
                                    touched={touched.email}
                                    errors={errors.email}
                                    inputStyle={{ color: colors.black }}
                                    containerStyle={{
                                        backgroundColor: "white",
                                        borderColor: touched.email && errors.email ? 'red' : colors.Gray_Border,
                                        borderWidth: 1,
                                        borderRadius: 4,
                                        width: '100%'
                                    }}
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    height={52}
                                    mpContainer={{ mt: 20 }}
                                    mpInput={{ ph: 10 }}
                                    textSize={14}
                                />

                                <Btn onPress={handleSubmit}
                                    title="Submit"
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
    },
});

export default ForgotPassword;
