import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { images } from '../../../assets/images';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import Btn from '../../../components/Btn';
import TextInputContainer from '../../../components/TextInputContainer';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { colors } from '../../../assets/colors/colors';

const EditProfile = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="Edit Profile" onPress={() => navigation.goBack()} />
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
                <View style={{ marginTop: vs(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={images.useImage}
                        style={{ height: vs(100), width: hs(100), resizeMode: 'contain', alignSelf: 'center' }}
                    />
                    <View style={{ marginLeft: vs(10) }} />
                    <Pressable>
                        <Image source={images.editUserImage}
                            style={{ height: vs(40), width: hs(40), resizeMode: 'contain', position: 'absolute', right: 0, top: 20 }}
                        />
                    </Pressable>
                </View>

                <View style={{ marginHorizontal: hs(15) }}>
                    <TextInputContainer
                        placeholder="Ricardo McDonald"
                        containerStyle={{ marginTop: vs(20) }}
                    />
                    <TextInputContainer
                        placeholder="corkery_dakota@gmail.com"
                        containerStyle={{ marginTop: vs(15) }}
                        keyboardType="email-address"
                    />
                    <TextInputContainer
                        placeholder="+1 23456789"
                        containerStyle={{ marginTop: vs(15) }}
                        keyboardType="phone-pad"
                    />
                    <Btn
                        title="Update"
                        btnStyle={{ marginTop: vs(25) }}
                    />
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

export default EditProfile;
