import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { hs, vs, fs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { fonts } from '../../../assets/fonts';
import { images } from '../../../assets/images';

const MySubscriptions = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="My Subscriptions" onPress={() => navigation.goBack()} />
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
            <View style={{ marginTop: vs(20), marginHorizontal: hs(15), backgroundColor: colors.white, borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                <View style={{ padding: 10, }}>
                    <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, }}>Subscription : <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Daily</Text></Text>
                </View>

                <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                <View style={{ flexDirection: 'row', padding: 10 }}>
                    <Image source={images.product2}
                        style={{ height: vs(70), width: hs(70), resizeMode: 'contain', }} />
                    <View style={{ marginHorizontal: hs(10) }}>
                        <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Homogenized milk</Text>
                        <Text style={{ marginTop: vs(5), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>200ml Cartoon</Text>
                        <Text style={{ marginTop: vs(5), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Qty : 1</Text>
                        <Text style={{ marginTop: vs(5), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Price : $25</Text>
                    </View>
                </View>

                <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                <View style={{ flexDirection: 'row', padding: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                    <Pressable style={{ width: '50%', alignItems: 'center', borderRightWidth: 1, borderRightColor: colors.Gray_Border }}>
                        <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold }}>Modify</Text>
                    </Pressable>
                    <Pressable style={{ width: '50%', alignItems: 'center', }}>
                        <Text style={{ fontSize: fs(16), color: 'red', fontFamily: fonts.bold }}>Delete</Text>
                    </Pressable>
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

export default MySubscriptions;
