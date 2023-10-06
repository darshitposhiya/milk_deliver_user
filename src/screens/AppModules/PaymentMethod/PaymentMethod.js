import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../assets/colors/colors';
import { hs, vs, fs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';
import { images } from '../../../assets/images';
import AuthFooter from '../../../components/AuthFooter';
import Btn from '../../../components/Btn';
import Modal from 'react-native-modal';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInputContainer from '../../../components/TextInputContainer';

const PaymentMethod = () => {

    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const renderHeader = () => {
        return (
            <Header heading="Select payment method" onPress={() => navigation.goBack()} />
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
            <View style={{ marginHorizontal: hs(15), marginTop: vs(20), borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, }}>
                    <Text style={{ fontSize: fs(16), fontFamily: fonts.bold, fontWeight: '700', color: colors.black }}>Credit and Debit Card</Text>
                    <Pressable onPress={() => navigation.navigate('AddNewCard')}>
                        <Text style={{ fontSize: fs(14), color: colors.Primary_Blue, fontFamily: fonts.bold, fontWeight: '700' }}>Add new card</Text>
                    </Pressable>
                </View>

                <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                <View style={{ paddingHorizontal: hs(10), paddingVertical: vs(10) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View style={{ padding: 5, width: '80%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                            <Image source={images.masterCard}
                                style={{ height: vs(30), width: hs(30), resizeMode: 'contain' }} />
                            <Text style={{ fontSize: fs(16), color: colors.Gray_text, marginLeft: hs(10), }}>**** **** **** 1234</Text>
                        </View>

                        <Pressable style={{ width: '20%', alignItems: 'flex-end' }}>
                            <Image source={images.select}
                                style={{ height: vs(22), width: hs(22), resizeMode: 'contain' }} />
                        </Pressable>
                    </View>

                    <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View style={{ padding: 5, width: '80%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                            <Image source={images.visaCard}
                                style={{ height: vs(30), width: hs(30), resizeMode: 'contain' }} />
                            <Text style={{ fontSize: fs(16), color: colors.Gray_text, marginLeft: hs(10), }}>**** **** **** 1234</Text>
                        </View>

                        <Pressable style={{ width: '20%', alignItems: 'flex-end' }}>
                            <Image source={images.selected}
                                style={{ height: vs(22), width: hs(22), resizeMode: 'contain' }} />
                        </Pressable>
                    </View>
                </View>
            </View>

            {/* ------------More way to pay---------------- */}

            <View style={{ marginHorizontal: hs(15), marginTop: vs(20), borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5, }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, }}>
                    <Text style={{ fontSize: fs(16), fontFamily: fonts.bold, fontWeight: '700', color: colors.black }}>More way to pay</Text>
                </View>

                <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                <View style={{ paddingHorizontal: hs(10), paddingVertical: vs(10) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View style={{ paddingHorizontal: hs(5), paddingVertical: vs(10), width: '80%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                            <Text style={{ fontSize: fs(16), color: colors.Gray_text, fontFamily: fonts.regular }}>Pay on Delivery</Text>
                        </View>

                        <Pressable style={{ width: '20%', alignItems: 'flex-end' }}>
                            <Image source={images.select}
                                style={{ height: vs(22), width: hs(22), resizeMode: 'contain' }} />
                        </Pressable>
                    </View>

                    <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', }}>
                        <View style={{ paddingHorizontal: hs(5), paddingVertical: vs(10), width: '80%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                            <Text style={{ fontSize: fs(16), color: colors.Gray_text, fontFamily: fonts.regular }}>Wallet</Text>
                        </View>

                        <Pressable style={{ width: '20%', alignItems: 'flex-end' }}>
                            <Image source={images.select}
                                style={{ height: vs(22), width: hs(22), resizeMode: 'contain' }} />
                        </Pressable>
                    </View>
                </View>
            </View>
            {/* --------Close----More way to pay---------------- */}

            <AuthFooter>
                <View style={{ marginHorizontal: 15, flexDirection: 'row', alignItems: 'center', }}>
                    <Btn
                        title="Continue"
                        btnStyle={{ width: '100%' }}
                    />
                </View>
            </AuthFooter>

            {/* ---------modal---------------------------------- */}

            {/* <Modal isVisible={isModalVisible} >
                <KeyboardAwareScrollView>
                    <View style={{ paddingVertical: vs(10), backgroundColor: 'white', }} >

                        <View style={{ marginHorizontal: hs(10), marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(18), fontFamily: fonts.bold, fontWeight: '700', color: colors.black }}>Add New Card</Text>
                            <Pressable onPress={() => setModalVisible(false)}>
                                <Image source={images.close}
                                    style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                            </Pressable>
                        </View>

                        <View style={{ marginTop: vs(15), borderWidth: 0.5, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                        <View style={{ marginHorizontal: hs(10) }}>
                            <TextInputContainer placeholder="Card Holder Name" containerStyle={{ marginTop: vs(20) }} />
                            <TextInputContainer placeholder="Card Number" containerStyle={{ marginTop: vs(15) }} />

                            <View style={{ marginTop: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <TextInputContainer
                                    placeholder="Valid till"
                                    containerStyle={{ width: '49%' }}
                                    rightIcon={() => (
                                        <Pressable>
                                            <Image source={images.downIcon}
                                                style={{ height: vs(15), width: hs(15), resizeMode: 'contain' }} />
                                        </Pressable>
                                    )}
                                />
                                <TextInputContainer placeholder="Cvv" containerStyle={{ width: '49%' }} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: hs(10), marginBottom: vs(10) }}>
                            <Btn title="Add" btnStyle={{ marginTop: vs(30), }} />
                        </View>
                    </View>
                </KeyboardAwareScrollView>
            </Modal> */}
            {/* -----Close------modal--------------------------- */}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
});

export default PaymentMethod;
