import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { colors } from '../../../assets/colors/colors';
import { fonts } from '../../../assets/fonts';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import { images } from '../../../assets/images';
import AuthFooter from '../../../components/AuthFooter';
import Btn from '../../../components/Btn';

const BuyAgain = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="Order Detail" onPress={() => navigation.goBack()} />
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
                <View style={{ marginHorizontal: hs(15), marginTop: vs(20), flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: colors.white, borderRadius: 5 }}>
                    <View style={{ width: '40%' }}>
                        <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Order date</Text>
                        <Text style={{ marginTop: vs(5), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Order id</Text>
                        <Text style={{ marginTop: vs(5), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Order total</Text>
                    </View>
                    <View style={{ width: '60%' }}>
                        <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>6-Feb-2022</Text>
                        <Text style={{ marginTop: vs(5), fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>refde58r4dvd4re</Text>
                        <Text style={{ marginTop: vs(5), fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>40.00 (1item)</Text>
                    </View>
                </View>

                {/*-----Shipping Address------------------*/}

                <View style={{ marginTop: vs(15), marginHorizontal: hs(15), backgroundColor: colors.white, borderRadius: 5 }}>
                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Shipping Address</Text>
                    </View>

                    <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={images.locationIcon}
                            style={{ height: vs(25), width: hs(25), resizeMode: 'contain' }} />
                        <Text style={{ marginHorizontal: hs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>490 Lauren Drive, Madition, Wiscosin, United States.</Text>
                    </View>

                    <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Delivered</Text>

                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                            <Image source={images.product3}
                                style={{ height: '100%', width: hs(60), resizeMode: 'contain' }} />
                            <View>
                                <Text style={{ marginHorizontal: hs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.bold }}>Homogenized Milk</Text>
                                <Text style={{ marginTop: vs(5), marginHorizontal: hs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Qty : 1</Text>
                                <Text style={{ marginTop: vs(5), marginHorizontal: hs(10), fontSize: fs(14), color: colors.Primary_Blue, fontFamily: fonts.bold }}>$30.00</Text>
                            </View>
                        </View>
                    </View>


                </View>
                {/*--Close-----Shipping Address---------------*/}

                {/*-------Order Summary-----------------------*/}

                <View style={{ marginTop: vs(15), marginHorizontal: hs(15), backgroundColor: colors.white, borderRadius: 5 }}>
                    <View style={{ padding: 10 }}>
                        <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Order Summary</Text>
                    </View>

                    <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <View style={{ paddingHorizontal: hs(10), marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Price</Text>
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

                    <View style={{ marginTop: vs(10), borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <View style={{ padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Total</Text>
                        <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>$40.00</Text>
                    </View>
                </View>
                {/*-----Close--Order Summary-------------------*/}
            </ScrollView>

            <AuthFooter>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: hs(15) }}>
                    <Btn title="Buy It Again" />
                </View>
            </AuthFooter>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default BuyAgain;
