import React, { useLayoutEffect, useState } from 'react';
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

const CreateAccount = () => {

  const navigation = useNavigation();
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isRepeatPasswordVisible, setIsRepeatPasswordVisible] = useState(false);

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


  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView>
        <View style={{ marginHorizontal: hs(15) }}>
          <AnimatedInput
            placeholder={'Name'}
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
          />

          <AnimatedInput
            placeholder={'Email'}
            containerStyle={{
              backgroundColor: "white",
              borderColor: colors.Gray_Border,
              borderWidth: 1,
              borderRadius: 4,
              width: '100%'
            }}
            keyboardType='email-address'
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

          <AnimatedInput
            placeholder={'Repeat password'}
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
            rightIcon={() => <Ionicons name={!isRepeatPasswordVisible ? 'eye-off' : 'eye'} size={20} color={colors.Gray_Border} style={{ position: 'absolute', top: 15, right: 10 }}
              onPress={() => {
                setIsRepeatPasswordVisible((prev) => !prev);
              }}
            />}
            secureTextEntry={!isRepeatPasswordVisible}
          />

          <Btn onPress={() => navigation.navigate('Verification')}
            title="Create an account"
            btnStyle={{ marginTop: vs(25) }}
          />

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
