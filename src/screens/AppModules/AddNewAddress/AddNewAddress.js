import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { images } from '../../../assets/images';
import { hs, vs, fs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { fonts } from '../../../assets/fonts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import AuthFooter from '../../../components/AuthFooter';
import Btn from '../../../components/Btn';
import TextInputContainer from '../../../components/TextInputContainer';

const AddNewAddress = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="Add new address" onPress={() => navigation.goBack()} />
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
                <View style={{
                    marginTop: vs(20),
                    marginHorizontal: hs(15), alignItems: 'center'
                }}>
                    <Pressable style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'row',
                        height: 55,
                        borderRadius: 5,
                        width: '100%',
                        backgroundColor: colors.white,
                        borderWidth: 1,
                        borderColor: colors.Primary_Blue
                    }}>
                        <Image source={images.currentLocation}
                            style={{ height: vs(25), width: hs(25), resizeMode: 'contain' }} />

                        <Text style={{
                            marginHorizontal: hs(10),
                            fontFamily: fonts.bold,
                            color: colors.Primary_Blue,
                            fontSize: fs(18),
                        }}>Use current location</Text>
                    </Pressable>

                    <View style={{ marginTop: vs(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                        <View style={{ width: '45%', opacity: 0.5, borderWidth: 1, borderColor: colors.Gray_Border }} />
                        <Text style={{ color: colors.Gray_text, fontFamily: fonts.regular }}>Or</Text>
                        <View style={{ width: '45%', opacity: 0.5, borderWidth: 1, borderColor: colors.Gray_Border }} />
                    </View>
                </View>

                <View style={{ marginHorizontal: hs(15) }}>
                    <TextInputContainer
                        placeholder="Country"
                        containerStyle={{ marginTop: vs(20) }}
                        rightIcon={() => (
                            <>
                                <Pressable>
                                    <Image source={images.downIcon}
                                        style={{ height: vs(15), width: hs(15), resizeMode: 'contain' }} />
                                </Pressable>
                            </>
                        )}
                    />
                    <TextInputContainer
                        placeholder="House No/Flat No/Floor/Tower"
                        containerStyle={{ marginTop: vs(15) }}
                    />
                    <TextInputContainer
                        placeholder="Area,Street"
                        containerStyle={{ marginTop: vs(15) }}
                    />
                    <TextInputContainer
                        placeholder="Landmark"
                        containerStyle={{ marginTop: vs(15) }}
                    />
                    <TextInputContainer
                        placeholder="City"
                        containerStyle={{ marginTop: vs(15) }}
                    />
                    <TextInputContainer
                        placeholder="State"
                        containerStyle={{ marginTop: vs(15) }}
                        rightIcon={() => (
                            <>
                                <Pressable>
                                    <Image source={images.downIcon}
                                        style={{ height: vs(15), width: hs(15), resizeMode: 'contain' }} />
                                </Pressable>
                            </>
                        )}
                    />

                    <View style={{ marginTop: vs(15), paddingBottom: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                        <Image source={images.selectAddress}
                            style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                        <Text style={{ marginHorizontal: hs(10), fontSize: fs(18), color: colors.black, fontFamily: fonts.bold }}>Default Delivery Address</Text>
                    </View>
                </View>
            </KeyboardAwareScrollView>

            <AuthFooter>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: hs(15) }}>
                    <Btn title="Save" />
                </View>
            </AuthFooter>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
});

export default AddNewAddress;
