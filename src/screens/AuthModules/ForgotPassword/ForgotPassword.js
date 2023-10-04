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

const ForgotPassword = () => {

    const navigation = useNavigation();
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

                    <Text style={{ marginTop: vs(10), alignSelf: 'center', fontSize: fs(16), fontFamily: fonts.regular, color: colors.black,textAlign:'center' }}>Enter Your email below and  we will send you a reset email.</Text>

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
                        mpContainer={{ mt: 20 }}
                        mpInput={{ ph: 10 }}
                        inputStyle={{ color: colors.black }}
                        textSize={14}
                    />

                    <Btn onPress={()=>navigation.navigate('ResetPassword')}
                     title="Submit" 
                     btnStyle={{marginTop: vs(25)}}
                     />

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
