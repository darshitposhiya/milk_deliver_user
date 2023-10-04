import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { colors } from '../../../assets/colors/colors';
import { fonts } from '../../../assets/fonts';
import { images } from '../../../assets/images';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import AuthFooter from '../../../components/AuthFooter';
import Btn from '../../../components/Btn';

const Checkout = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="Order Details" onPress={() => navigation.goBack()} />
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
            <ScrollView style={{ marginBottom: vs(80) }} showsVerticalScrollIndicator={false}>
                <View>
                    <View style={{ marginTop: vs(20), marginHorizontal: hs(15), paddingVertical: vs(10), paddingHorizontal: hs(10), backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',borderRadius:5 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.cartProduct1}
                                style={{ height: vs(70), width: hs(60), resizeMode: 'contain', }} />
                            <View style={{ marginHorizontal: hs(10) }}>
                                <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold }}>Amul cool milk</Text>
                                <Text style={{ marginTop: vs(5), fontSize: fs(16), color: colors.Light_Blue, fontFamily: fonts.bold, }}>$25.00</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5, padding: 5 }}>
                            <Pressable>
                                <Image source={images.minus}
                                    style={{ height: vs(15), width: hs(15), resizeMode: 'contain' }} />
                            </Pressable>
                            <Text style={{ marginHorizontal: hs(15), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>1</Text>
                            <Pressable>
                                <Image source={images.plus}
                                    style={{ height: vs(15), width: hs(15), resizeMode: 'contain' }} />
                            </Pressable>
                        </View>
                    </View>

                    <View style={{ marginTop: vs(15), marginHorizontal: hs(15), paddingVertical: vs(10), paddingHorizontal: hs(10), backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',borderRadius:5 }}>

                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.cartProduct2}
                                style={{ height: vs(70), width: hs(60), resizeMode: 'contain', }} />
                            <View style={{ marginHorizontal: hs(10) }}>
                                <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold }}>Amul cool milk</Text>
                                <Text style={{ marginTop: vs(5), fontSize: fs(16), color: colors.Light_Blue, fontFamily: fonts.bold, }}>$25.00</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5, padding: 5 }}>
                            <Pressable>
                                <Image source={images.minus}
                                    style={{ height: vs(15), width: hs(15), resizeMode: 'contain' }} />
                            </Pressable>
                            <Text style={{ marginHorizontal: hs(15), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>1</Text>
                            <Pressable>
                                <Image source={images.plus}
                                    style={{ height: vs(15), width: hs(15), resizeMode: 'contain' }} />
                            </Pressable>
                        </View>
                    </View>

                    <View style={{ marginTop: vs(15), marginHorizontal: hs(15), backgroundColor: colors.white, borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Address</Text>
                            <Pressable onPress={() => navigation.navigate('Address')}>
                                <Text style={{ fontSize: fs(16), color: colors.Light_Blue, fontFamily: fonts.regular }}>Change</Text>
                            </Pressable>
                        </View>

                        <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Image source={images.locationIcon}
                                style={{ height: vs(25), width: hs(25), resizeMode: 'contain' }} />
                            <Text style={{ marginHorizontal: hs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>490 Lauren Drive, Madition, Wiscosin, United States.</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: vs(15), marginHorizontal: hs(15), backgroundColor: colors.white, borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                        <View style={{ padding: 10 }}>
                            <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Price Details</Text>
                        </View>

                        <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                        <View style={{ paddingHorizontal: hs(10), marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Price(2 items)</Text>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>$30.00</Text>
                        </View>

                        <View style={{ paddingHorizontal: hs(10), marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Discount</Text>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>$0.00</Text>
                        </View>

                        <View style={{ paddingHorizontal: hs(10), marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Delivery charges</Text>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>$10.00</Text>
                        </View>

                        <View style={{ paddingHorizontal: hs(10), marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Delivery charges</Text>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>$2.75</Text>
                        </View>

                        <View style={{ marginTop: vs(10), borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                        <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Total</Text>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>$42.75</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>

            <AuthFooter>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: hs(15) }}>
                    <Btn
                        onPress={() => navigation.navigate('PaymentMethod')}
                        title="Continue"
                    />
                </View>
            </AuthFooter>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Checkout;
