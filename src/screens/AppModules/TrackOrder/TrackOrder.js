import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { screenHeight, vs, hs, fs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';

const TrackOrder = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="Tracking" onPress={() => navigation.goBack()} />
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
            <View style={{ height: screenHeight * 0.30, backgroundColor: colors.Primary_Blue }} />

            <View style={{marginTop:vs(20), paddingHorizontal: hs(15),paddingVertical: vs(10), borderTopLeftRadius: 15, borderTopRightRadius: 15, backgroundColor:colors.white }}>
                <Text style={{ fontSize: fs(14), fontFamily: fonts.bold, color: colors.black, }}>Delivery Time</Text>
                <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={images.time}
                        style={{ height: vs(15), width: hs(15), resizeMode: 'contain' }} />
                    <Text style={{ marginLeft: hs(10), fontSize: fs(18), color: colors.black, fontFamily: fonts.bold }}>6 min</Text>
                </View>

                <View style={{ marginTop: vs(20) }}>
                    <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, }}>Delivery Status</Text>
                    <View style={{marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.delivering}
                                style={{ height: vs(35), width: hs(35), resizeMode: 'contain' }} />
                            <Text style={{ marginLeft: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Delivering</Text>
                        </View>
                        <Image source={images.greenTrue}
                            style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                    </View>

                    <View style={{marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.orderPrepare}
                                style={{ height: vs(35), width: hs(35), resizeMode: 'contain' }} />
                            <Text style={{ marginLeft: hs(10), fontSize: fs(16), color: colors.Gray_text, fontFamily: fonts.bold, fontWeight: '700' }}>Order is being prepared</Text>
                        </View>
                        <Image source={images.greenTrue}
                            style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                    </View>

                    <View style={{marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.orderAccepted}
                                style={{ height: vs(35), width: hs(35), resizeMode: 'contain' }} />
                            <Text style={{ marginLeft: hs(10), fontSize: fs(16), color: colors.Gray_text, fontFamily: fonts.bold, fontWeight: '700' }}>Order is accepted</Text>
                        </View>
                        <Image source={images.greenTrue}
                            style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                    </View>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default TrackOrder;
