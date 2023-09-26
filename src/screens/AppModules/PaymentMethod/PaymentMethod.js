import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../assets/colors/colors';
import { hs, vs, fs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';
import { images } from '../../../assets/images';
import AuthFooter from '../../../components/AuthFooter';
import Btn from '../../../components/Btn';

const PaymentMethod = () => {

    const navigation = useNavigation();
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
                    <Text style={{ fontSize: fs(18), fontFamily: fonts.bold, fontWeight: '700', color: colors.black }}>Credit and Debit Card</Text>
                    <Pressable>
                        <Text style={{ fontSize: fs(16), color: colors.Primary_Blue, fontFamily: fonts.bold, }}>Add new card</Text>
                    </Pressable>
                </View>

                <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                <View style={{ paddingHorizontal: hs(5) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                        <View style={{ padding: 5, width: '85%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                            <Image source={images.masterCard}
                                style={{ height: vs(30), width: hs(30), resizeMode: 'contain' }} />
                            <Text style={{ fontSize: fs(16), color: colors.Gray_text, marginLeft: hs(10), }}>**** **** **** 1234</Text>
                        </View>

                        <Pressable>
                            <Image source={images.select}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                        </Pressable>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                        <View style={{ padding: 5, width: '85%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                            <Image source={images.visaCard}
                                style={{ height: vs(30), width: hs(30), resizeMode: 'contain' }} />
                            <Text style={{ fontSize: fs(16), color: colors.Gray_text, marginLeft: hs(10), }}>**** **** **** 1234</Text>
                        </View>

                        <Pressable>
                            <Image source={images.selected}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                        </Pressable>
                    </View>
                </View>
            </View>

            {/* --------------------------- */}
            <View style={{ marginHorizontal: hs(15), marginTop: vs(20), borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5, }}>

                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10, }}>
                    <Text style={{ fontSize: fs(18), fontFamily: fonts.bold, fontWeight: '700', color: colors.black }}>More way to pay</Text>
                </View>

                <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                <View style={{ paddingHorizontal: hs(5) }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                        <View style={{ paddingHorizontal: hs(5), paddingVertical: vs(10), width: '85%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                            <Text style={{ fontSize: fs(16), color: colors.Gray_text, fontFamily: fonts.regular }}>Pay on Delivery</Text>
                        </View>

                        <Pressable>
                            <Image source={images.select}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                        </Pressable>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', padding: 10 }}>
                        <View style={{ paddingHorizontal: hs(5), paddingVertical: vs(10), width: '85%', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                            <Text style={{ fontSize: fs(16), color: colors.Gray_text, fontFamily: fonts.regular }}>Wallet</Text>
                        </View>

                        <Pressable>
                            <Image source={images.select}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                        </Pressable>
                    </View>
                </View>
            </View>

            <AuthFooter>
            <View style={{ marginHorizontal: 15, flexDirection: 'row', alignItems: 'center', }}>
                    <Btn
                        title="Continue"
                        btnStyle={{ width: '100%' }}
                    />
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

export default PaymentMethod;
