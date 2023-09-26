import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { colors } from '../../../assets/colors/colors';
import { vs, hs, fs, screenWidth } from '../../../utility/ResponsiveStyle';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import Btn from '../../../components/Btn';
import AuthFooter from '../../../components/AuthFooter';

const Subscribe = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="Subscribe" onPress={() => navigation.goBack()} />
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
            <View>
                <View style={{ marginHorizontal: hs(15), paddingVertical: vs(10), paddingHorizontal: hs(10), backgroundColor: colors.white, marginTop: vs(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={images.productSubscribe}
                            style={{ height: vs(70), width: hs(60), resizeMode: 'contain', }} />
                        <View>
                            <Text style={{ fontSize: fs(18), color: colors.black, fontFamily: fonts.bold }}>Amul cool milk</Text>
                            <Text style={{ marginTop: vs(5), fontSize: fs(16), color: colors.Light_Blue, fontFamily: fonts.bold, }}>$25.00</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5, padding: 5 }}>
                        <Pressable>
                            <Image source={images.minus}
                                style={{ height: vs(10), width: hs(10), resizeMode: 'contain' }} />
                        </Pressable>
                        <Text style={{ marginHorizontal: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>1</Text>
                        <Pressable>
                            <Image source={images.plus}
                                style={{ height: vs(10), width: hs(10), resizeMode: 'contain' }} />
                        </Pressable>
                    </View>
                </View>

                <View style={{ marginHorizontal: hs(15), marginTop: vs(15) }}>
                    <Text style={{ fontSize: fs(20), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Pick Schedule</Text>
                </View>

                <View style={{
                    marginHorizontal: hs(15), paddingVertical: vs(10), paddingHorizontal: hs(5), backgroundColor: colors.white, marginTop: vs(15),
                    flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap',
                }}>
                    <Btn
                        title="Daily"
                        btnStyle={{
                            width: 'auto', height: vs(30), paddingHorizontal: 10, margin: 5,
                            backgroundColor: colors.Green, borderWidth: 1, borderColor: colors.Gray_Border
                        }}
                        btnTextStyle={{ fontSize: fs(16) }}
                    />
                    <Btn
                        title="Alternate day"
                        btnStyle={{
                            width: 'auto', height: vs(30), paddingHorizontal: 10, margin: 5,
                            backgroundColor: colors.white, borderWidth: 1, borderColor: colors.Gray_Border
                        }}
                        btnTextStyle={{ fontSize: fs(16), color: colors.black }}
                    />
                    <Btn
                        title="Every 3 day"
                        btnStyle={{
                            width: 'auto', height: vs(30), paddingHorizontal: 10, margin: 5,
                            backgroundColor: colors.white, borderWidth: 1, borderColor: colors.Gray_Border
                        }}
                        btnTextStyle={{ fontSize: fs(16), color: colors.black }}
                    />
                    <Btn
                        title="Weekly"
                        btnStyle={{
                            width: 'auto', height: vs(30), paddingHorizontal: 10, margin: 5,
                            backgroundColor: colors.white, borderWidth: 1, borderColor: colors.Gray_Border
                        }}
                        btnTextStyle={{ fontSize: fs(16), color: colors.black }}
                    />
                    <Btn
                        title="Monthly"
                        btnStyle={{
                            width: 'auto', height: vs(30), paddingHorizontal: 10, margin: 5,
                            backgroundColor: colors.white, borderWidth: 1, borderColor: colors.Gray_Border
                        }}
                        btnTextStyle={{ fontSize: fs(16), color: colors.black }}
                    />
                </View>

                <View style={{ marginHorizontal: hs(15), marginTop: vs(15) }}>
                    <Text style={{ fontSize: fs(20), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Delivery Address</Text>
                </View>

                <View style={{
                    marginHorizontal: hs(15), marginTop: vs(15), paddingVertical: vs(10), paddingHorizontal: hs(10), backgroundColor: colors.white,
                    flexDirection: 'row', justifyContent: 'space-between'
                }}>
                    <Text style={{ flex: 1, fontSize: fs(16), color: colors.Gray_text, fontFamily: fonts.regular }}>490 Lauren Drive, Madison, Wisconsin, United States.</Text>
                    <Pressable>
                        <Image source={images.editAddress}
                            style={{ height: vs(15), width: hs(15), resizeMode: 'contain', marginLeft: hs(20) }} />
                    </Pressable>
                </View>
            </View>

            <AuthFooter>
                <View style={{ marginHorizontal: 15, flexDirection: 'row', alignItems: 'center', }}>
                    <Btn onPress={() => navigation.navigate('PaymentMethod')}
                        title="Start Subscription"
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
    },
});

export default Subscribe;
