import React, { useLayoutEffect, useState, useRef, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable, Image } from 'react-native';
import { colors } from '../../../assets/colors/colors';
import AnimatedInput from '../../../components/AnimatedInput';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { fs, hs, vs } from '../../../utility/ResponsiveStyle';
import Btn from '../../../components/Btn';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { fonts } from '../../../assets/fonts';
import { images } from '../../../assets/images';
import { Formik } from 'formik';
import { registerValidate } from '../../../utility/Validations';
import { useDispatch } from 'react-redux';
import { SignupApi } from '../../../features/authSlice';
import InputBox from '../../../components/InputBox';
import { getValues, saveUser } from '../../../features/whiteLists';

const CreateAccount = ({ route }) => {

  const formRef = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [otp, setOtp] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);

  useEffect(() => {
    if (formRef.current) {
      formRef.current?.setFieldValue('phone_code', route.params?.countryCode || '');
    }
  }, [formRef, route.params]);
  const renderHeader = () => {
    return (
      <Header heading="Create an account" onPress={() => navigation.goBack()} />
    )
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => {
        return renderHeader();
      }
    });
  }, []);

  const signupHandler = async (values) => {

    let formData = new FormData();
    formData.append('name', values.name);
    formData.append('email', values.email);
    formData.append('country_code', route?.params?.phone_code);
    formData.append('phone_no', values.phone);
    formData.append('password', values.password);
    formData.append('confirmPassword', values.confirmPassword);

    const response = await dispatch(SignupApi({ data: formData })).unwrap();
    console.log('ResponseOfCreateAccount', response);

    if (response?.status == "Success") {
      dispatch(getValues(true));
      dispatch(saveUser({ ...response?.data }));
      setOtp(response?.data?.otp);
      navigation.navigate("Verification", {
        otp: otp,
        email: values.email,
        password: values.password
      })
    }
    else {
      console.log("it;s err")
      //  Toast.show(response?.message, Toast.SHORT)
    }
  };

  const selectCountryHandler = () => {
    navigation.navigate('Country', {
      fromSignup: true
    });
  };

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView showsVerticalScrollIndicator={false} style={{ marginBottom: vs(20) }}>
        <View style={{ marginHorizontal: hs(15), marginTop: vs(20) }}>

          <Pressable>
            <Image source={images.camera}
              style={{ height: vs(80), width: hs(80), resizeMode: 'contain', alignSelf: 'center' }} />
          </Pressable>

          <Formik
            initialValues={registerValidate.initialState}
            validationSchema={registerValidate.schema}
            onSubmit={(values) => signupHandler(values)}
            innerRef={formRef}
          >
            {({ values, setFieldTouched, handleChange, handleSubmit, errors, touched }) => (
              <>
                <AnimatedInput
                  placeholder={'Name'}
                  value={values.name}
                  onChangeText={handleChange("name")}
                  onBlur={() => setFieldTouched('name')}
                  touched={touched.name}
                  errors={errors.name}
                  inputStyle={{ color: colors.black }}
                  containerStyle={{
                    backgroundColor: "white",
                    borderColor: touched.name && errors.name ? 'red' : colors.Gray_Border,
                    borderWidth: 1,
                    borderRadius: 4,
                    width: '100%'
                  }}
                  autoCapitalize='none'
                  height={52}
                  mpContainer={{ mt: 15 }}
                  mpInput={{ ph: 10 }}
                  textSize={14}
                />

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
                  mpContainer={{ mt: 15 }}
                  mpInput={{ ph: 10 }}
                  textSize={14}
                />

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: vs(15) }}>
                  <View style={{ width: '25%' }}>
                    <InputBox
                      placeholder={'+27'}
                      value={values.phone_code}
                      onChangeText={handleChange("phone_code")}
                      onBlur={() => setFieldTouched('phone_code')}
                      touched={touched.phone_code}
                      errors={errors.phone_code}
                      containerStyle={{
                        borderColor: touched.phone_code && errors.phone_code ? 'red' : colors.Gray_Border,
                        borderRadius: 5,
                      }}
                      editable={false}
                      pointerEvents="box-only"
                      height={52}
                      mpInputContainer={{ ph: 10 }}
                      textSize={14}
                      onPress={selectCountryHandler}
                      rightIcon={() => <Ionicons name='caret-down-outline' size={15} style={{ right: 5 }} color={"#000"} />}
                    />
                  </View>

                  <View style={{ width: '73%' }}>
                    <AnimatedInput
                      placeholder={'phone number'}
                      value={values.phone}
                      onChangeText={handleChange("phone")}
                      onBlur={() => setFieldTouched('phone')}
                      touched={touched.phone}
                      errors={errors.phone}
                      inputStyle={{ color: colors.black }}
                      containerStyle={{
                        backgroundColor: "white",
                        borderColor: touched.phone && errors.phone ? 'red' : colors.Gray_Border,
                        borderWidth: 1,
                        borderRadius: 4,
                        width: '100%'
                      }}
                      keyboardType="phone-pad"
                      height={52}
                      mpInput={{ ph: 10 }}
                      textSize={14}
                    />
                  </View>
                </View>

                <AnimatedInput
                  placeholder={'Password'}
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
                  mpContainer={{ mt: 15 }}
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
                  placeholder={'Repeat password'}
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
                  rightIcon={() => <Ionicons name={!isRepeatPasswordVisible ? 'eye-off' : 'eye'} size={20} color={colors.Gray_Border} style={{ position: 'absolute', top: 15, right: 10 }}
                    onPress={() => {
                      setIsRepeatPasswordVisible((prev) => !prev);
                    }}
                  />}
                  secureTextEntry={!isRepeatPasswordVisible}
                />

                <Btn onPress={handleSubmit}
                  title="Create an account"
                  btnStyle={{ marginTop: vs(25) }}
                />
              </>
            )}
          </Formik>

          <View style={{ marginTop: vs(15), flexDirection: 'row', alignItems: 'center', alignSelf: 'center' }}>
            <Text style={{ fontSize: fs(16), fontFamily: fonts.regular, color: colors.Gray_text, }}>By setting up you agree to our</Text>

            <Pressable onPress={() => navigation.navigate('Terms')}>
              <Text style={{ fontSize: fs(16), fontFamily: fonts.regular, color: colors.Light_Blue, textDecorationLine: 'underline' }}> Terms.</Text>
            </Pressable>
          </View>

          <Text style={{ marginTop: vs(25), alignSelf: 'center', fontSize: fs(16), fontFamily: fonts.regular, color: colors.black }}>Already have an account?</Text>

          <Pressable onPress={() => navigation.navigate('SignIn')}>
            <Text style={{ marginTop: vs(10), alignSelf: 'center', fontSize: fs(16), fontFamily: fonts.bold, color: colors.Light_Blue, textDecorationLine: 'underline' }}>Sign In</Text>
          </Pressable>
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

export default CreateAccount;
