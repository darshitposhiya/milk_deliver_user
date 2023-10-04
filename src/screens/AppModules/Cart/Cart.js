import { useNavigation } from '@react-navigation/native';
import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import { getStatusBarHeight } from '../../../utility/Globals';
import { hs, vs, fs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import Header from '../../../components/Header';

const Cart = () => {

    const navigation = useNavigation();
    const statusBarHeight = getStatusBarHeight();
    const renderHeader = () => {
        return (
            <View style={{ width: '100%', paddingTop: statusBarHeight, backgroundColor: colors.Primary_Blue }}>
                <View style={{
                    marginHorizontal: hs(15),
                    paddingVertical: vs(15),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: fs(26),
                        color: colors.white,
                        fontFamily: fonts.bold,
                        fontWeight: '700'
                    }}>Cart</Text>

                    <Pressable onPress={() => navigation.navigate('Checkout')}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: fs(20), color: colors.white, fontFamily: fonts.regular, }}>Chekout</Text>
                        <Image source={images.rightIcon}
                            style={{
                                height: vs(15),
                                width: hs(15),
                                resizeMode: 'contain'
                            }} />
                    </Pressable>
                </View>
            </View>
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
        <>
            <View style={styles.container}>
                <ScrollView style={{ marginBottom: vs(30) }} showsVerticalScrollIndicator={false}>
                    <View style={{ position: 'relative' }}>
                        <View style={{ height: vs(45), backgroundColor: colors.Primary_Blue, width: '100%', position: 'absolute' }} />
                        <View style={{ marginHorizontal: hs(15), paddingVertical: vs(10), paddingHorizontal: hs(10), backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 5 }}>

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
                    </View>

                    <View style={{ marginTop: vs(15), marginHorizontal: hs(15), paddingVertical: vs(10), paddingHorizontal: hs(10), backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderRadius: 5 }}>

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

                    <View style={{ marginTop: vs(15), marginHorizontal: hs(15), padding: 10, backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', borderRadius: 5 }}>
                        <Image source={images.discount}
                            style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                        <Text style={{ marginHorizontal: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.bold,  }}>Do yoy have an discount  code?</Text>
                    </View>

                    <View style={{ marginTop: vs(15), marginHorizontal: hs(15), padding: 10, backgroundColor: colors.white,borderRadius:5 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(14), color: colors.Gray_text, fontFamily: fonts.regular }}>Subtotal</Text>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>$30</Text>
                        </View>

                        <View style={{ marginTop: vs(10), borderWidth: 1, opacity: 0.5, borderColor: colors.Gray_Border }} />

                        <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(14), color: colors.Gray_text, fontFamily: fonts.regular }}>Discount</Text>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>$0</Text>
                        </View>

                        <View style={{ marginTop: vs(10), borderWidth: 1, opacity: 0.5, borderColor: colors.Gray_Border }} />

                        <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(14), color: colors.Gray_text, fontFamily: fonts.regular }}>Delivery</Text>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>$10</Text>
                        </View>

                        <View style={{ marginTop: vs(10), borderWidth: 1, opacity: 0.5, borderColor: colors.Gray_Border }} />

                        <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(14), color: colors.Gray_text, fontFamily: fonts.regular }}>Tax(5%)</Text>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>$2.75</Text>
                        </View>

                        <View style={{ marginTop: vs(10), borderWidth: 1, borderColor: colors.Light_Blue, borderStyle: 'dashed' }} />

                        <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold }}>Total</Text>
                            <Text style={{ fontSize: fs(16), color: colors.Light_Blue, fontFamily: fonts.bold, fontWeight: '700' }}>$42.75</Text>
                        </View>

                    </View>
                </ScrollView>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Cart;
