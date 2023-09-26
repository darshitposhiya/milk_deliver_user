import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import { colors } from '../../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../../assets/images';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';
import Btn from '../../../components/Btn';
import AuthFooter from '../../../components/AuthFooter';

const ProductDetail = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="Back"
                onPress={() => navigation.goBack()}
                rightIcon={() => (
                    <Pressable>
                        <Image source={images.search}
                            style={{ height: vs(20), width: hs(20), resizeMode: 'contain', tintColor: colors.white }} />
                    </Pressable>
                )} />
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
            <ScrollView style={{ marginBottom: vs(80), }} showsVerticalScrollIndicator={false}>
                <Image source={images.productDetail}
                    style={{ height: vs(200), width: hs(200), resizeMode: 'contain', alignSelf: 'center' }} />

                <View style={{ marginHorizontal: hs(15) }}>
                    <Text style={{ fontSize: fs(20), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Amul cool milk, 200ml</Text>
                    <Text style={{ fontSize: fs(22), color: colors.Light_Blue, fontFamily: fonts.bold, fontWeight: '700' }}>$25.00</Text>
                </View>

                <View style={{ marginHorizontal: hs(15) }}>
                    <Text style={{ marginTop: vs(15), fontSize: fs(18), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Description</Text>
                    <Text style={{ marginTop: vs(5), fontSize: fs(16), color: colors.Gray_text, fontFamily: fonts.regular, textAlign: 'justify' }}>it is often frustaring to attempt to plan meals that are designed for one.Despite this fact, we are seeing more and more recipe books and internet websites that are dedicated to the act of coocking for one.</Text>
                </View>

                <View style={{ marginHorizontal: hs(15) }}>
                    <Text style={{ marginTop: vs(15), fontSize: fs(20), color: colors.Light_Blue, fontFamily: fonts.bold, fontWeight: '700' }}>The Fusion</Text>
                    <Text style={{ marginTop: vs(5), fontSize: fs(16), color: colors.Gray_text, fontFamily: fonts.regular, textAlign: 'justify' }}>963 Madyson Drive Suite 679</Text>
                    <View style={{ flexDirection: 'row', marginTop: vs(5), alignItems: 'center' }}>
                        <Image source={images.yellowStar} style={{ height: vs(15), width: hs(15), resizeMode: 'contain', }} />
                        <Image source={images.yellowStar} style={{ height: vs(15), width: hs(15), resizeMode: 'contain', marginLeft: hs(5) }} />
                        <Image source={images.yellowStar} style={{ height: vs(15), width: hs(15), resizeMode: 'contain', marginLeft: hs(5) }} />
                        <Image source={images.yellowStar} style={{ height: vs(14), width: hs(14), resizeMode: 'contain', marginLeft: hs(5) }} />
                        <Image source={images.whiteStar} style={{ height: vs(15), width: hs(15), resizeMode: 'contain', marginLeft: hs(5) }} />
                        <Text style={{ fontSize: fs(14), color: colors.Gray_text, fontFamily: fonts.regular, marginLeft: hs(5) }}>(245 reviews)</Text>
                    </View>
                </View>

                <View style={{ marginHorizontal: hs(15) }}>
                    <Text style={{ marginTop: vs(15), fontSize: fs(18), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Review</Text>
                    <View style={{ marginTop: vs(5), flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Image source={images.user1} style={{ height: vs(35), width: hs(35), resizeMode: 'contain', borderRadius: 30 }} />
                            <View style={{ marginLeft: hs(10) }}>
                                <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Ellen McLaughlin</Text>
                                <Text style={{ marginTop: vs(3), fontSize: fs(12), color: colors.Gray_text, fontFamily: fonts.regular }}>2 hours ago</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: vs(5) }}>
                            <Image source={images.yellowStar} style={{ height: vs(10), width: hs(10), resizeMode: 'contain', }} />
                            <Image source={images.yellowStar} style={{ height: vs(10), width: hs(10), resizeMode: 'contain', marginLeft: hs(5) }} />
                            <Image source={images.yellowStar} style={{ height: vs(10), width: hs(10), resizeMode: 'contain', marginLeft: hs(5) }} />
                            <Image source={images.yellowStar} style={{ height: vs(10), width: hs(10), resizeMode: 'contain', marginLeft: hs(5) }} />
                            <Image source={images.whiteStar} style={{ height: vs(10), width: hs(10), resizeMode: 'contain', marginLeft: hs(5) }} />
                        </View>
                    </View>

                    <View style={{ marginTop: vs(10), marginHorizontal: hs(45) }}>
                        <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.regular, textAlign: 'justify' }}>So we needed up ordering the deep fired salmon roll with Chaines hot musterd and wasabi noodles with</Text>
                    </View>
                </View>

                <View style={{ width: '100%', marginTop: vs(10), opacity: 0.5, borderWidth: 1, borderColor: colors.Gray_Border }} />

                <View style={{ marginHorizontal: hs(15), marginTop: vs(5) }}>
                    <View style={{ marginTop: vs(5), flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
                            <Image source={images.user2} style={{ height: vs(35), width: hs(35), resizeMode: 'contain', borderRadius: 30 }} />
                            <View style={{ marginLeft: hs(10) }}>
                                <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Vincent King</Text>
                                <Text style={{ marginTop: vs(3), fontSize: fs(12), color: colors.Gray_text, fontFamily: fonts.regular }}>3 hours ago</Text>
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', alignItems: 'flex-start', marginTop: vs(5) }}>
                            <Image source={images.yellowStar} style={{ height: vs(10), width: hs(10), resizeMode: 'contain', }} />
                            <Image source={images.yellowStar} style={{ height: vs(10), width: hs(10), resizeMode: 'contain', marginLeft: hs(5) }} />
                            <Image source={images.yellowStar} style={{ height: vs(10), width: hs(10), resizeMode: 'contain', marginLeft: hs(5) }} />
                            <Image source={images.yellowStar} style={{ height: vs(10), width: hs(10), resizeMode: 'contain', marginLeft: hs(5) }} />
                            <Image source={images.whiteStar} style={{ height: vs(10), width: hs(10), resizeMode: 'contain', marginLeft: hs(5) }} />
                        </View>
                    </View>

                    <View style={{ marginTop: vs(10), marginHorizontal: hs(45) }}>
                        <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.regular, textAlign: 'justify' }}>So we needed up ordering the deep fired salmon roll with Chaines hot musterd and wasabi noodles with</Text>
                    </View>
                </View>

                <View style={{ width: '100%', marginTop: vs(10), opacity: 0.5, borderWidth: 1, borderColor: colors.Gray_Border }} />
            </ScrollView>

            <AuthFooter>
                <View style={{ marginHorizontal: hs(15), flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Btn
                        onPress={() => navigation.navigate('Subscribe')}
                        title="Subscribe@ $25"
                        btnStyle={{ width: '49%', backgroundColor: colors.white, borderWidth: 1, borderColor: colors.Light_Blue }}
                        btnTextStyle={{ color: colors.Light_Blue }}
                    />
                    <Btn
                        title="Buy Once"
                        btnStyle={{ width: '49%', backgroundColor: colors.Light_Blue }}
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

export default ProductDetail;
