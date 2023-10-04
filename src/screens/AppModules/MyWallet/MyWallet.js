import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ImageBackground, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { images } from '../../../assets/images';
import { hs, vs, fs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { fonts } from '../../../assets/fonts';

const MyWallet = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="My Wallet" onPress={() => navigation.goBack()} />
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
            <View style={{ marginHorizontal: hs(15), marginTop: vs(20), alignItems: 'center', flexDirection: 'row' }}>
                <View style={styles.imageWrapper}>
                    <ImageBackground style={styles.theImage} source={images.walletBackgroung}>
                        <Text style={{ fontSize: fs(16), color: colors.white, fontFamily: fonts.bold, fontWeight: '700' }}>Total Balance</Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: vs(10) }}>
                            <Image source={images.dollarIcon}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }}
                            />
                            <Text style={{ marginHorizontal: hs(10), fontSize: fs(18), color: colors.white, fontFamily: fonts.bold, fontWeight: '700' }}>2643</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>

            <View style={{ marginTop: vs(15), flex: 1, backgroundColor: colors.white, borderTopLeftRadius: 20, borderTopRightRadius: 20 }}>
                <ScrollView>
                    <View style={{ marginHorizontal: hs(15) }}>
                        <View style={{ marginTop: vs(10) }}>
                            <Text style={{ fontSize: fs(18), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Transactions</Text>
                        </View>
                        <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Paid</Text>
                                <Text style={{ marginTop: vs(5), fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, }}>By card</Text>
                                <Text style={{ fontSize: fs(14), color: colors.Gray_text, fontFamily: fonts.regular }}>23 Fab 2022</Text>
                            </View>
                            <Text style={{ fontSize: fs(16), color: 'red', fontFamily: fonts.bold, fontWeight: '700' }}>-$20</Text>
                        </View>

                        <View style={{ marginTop: vs(10), borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                        <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                            <View>
                                <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Receive cashback</Text>
                                <Text style={{ marginTop: vs(5), fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, }}>By card</Text>
                                <Text style={{ fontSize: fs(14), color: colors.Gray_text, fontFamily: fonts.regular }}>23 Fab 2022</Text>
                            </View>
                            <Text style={{ fontSize: fs(16), color: colors.Green, fontFamily: fonts.bold, fontWeight: '700' }}>+$49</Text>
                        </View>

                        <View style={{ marginTop: vs(10), borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />
                    </View>
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imageWrapper: {
        height: 150,
        width: '100%',
        overflow: "hidden",
        borderRadius: 10
    },
    theImage: {
        width: "100%",
        height: "100%",
        resizeMode: "cover",
        alignItems: 'center',
        justifyContent: 'center'

    }
});

export default MyWallet;
