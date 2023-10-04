import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { images } from '../../../assets/images';
import { hs, screenHeight, vs, fs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';
import { colors } from '../../../assets/colors/colors';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Btn from '../../../components/Btn';
import AuthFooter from '../../../components/AuthFooter';
import TextInputContainer from '../../../components/TextInputContainer';

const Help = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="Help" onPress={() => navigation.goBack()} />
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
            <KeyboardAwareScrollView style={{ marginBottom: vs(80) }} showsVerticalScrollIndicator={false}>
                <View style={{ marginTop: vs(20) }}>
                    <Image source={images.helpImage}
                        style={{ height: screenHeight * 0.20, width: '100%', resizeMode: 'contain', alignSelf: 'center' }} />
                </View>
                <View style={{ marginHorizontal: hs(15), marginTop: vs(20) }}>
                    <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Email address*</Text>
                    <TextInputContainer
                        placeholder="loremipsum@gmail.com"
                        containerStyle={{ marginTop: vs(5) }}
                    />
                </View>

                <View style={{ marginHorizontal: hs(15), marginTop: vs(15) }}>
                    <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Detail description of issue*</Text>
                    <TextInputContainer
                        placeholder="Type here..."
                        multiline={true}
                        containerStyle={{ height: vs(100), alignItems: 'flex-start', marginTop: vs(5) }}
                    />
                </View>

                <View style={{ marginHorizontal: hs(15), marginTop: vs(15) }}>
                    <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Attach screenshot</Text>
                    <View style={{ marginTop: vs(5), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <Btn title="File name"
                            btnStyle={{ width: '63%', borderRadius: 5, justifyContent: 'flex-start', backgroundColor: colors.Light_Gray }}
                            btnTextStyle={{ color: colors.Gray_text, paddingHorizontal: hs(10), fontSize: fs(16) }}
                        />
                        <Btn title="Upload"
                            btnStyle={{ width: '35%', backgroundColor: colors.Green, borderRadius: 5 }}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>

            <AuthFooter>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: hs(15) }}>
                    <Btn title="Submit" />
                </View>
            </AuthFooter>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
});

export default Help;
