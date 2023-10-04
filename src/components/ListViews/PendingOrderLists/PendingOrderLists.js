import React, { Component } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { images } from '../../../assets/images';
import { colors } from '../../../assets/colors/colors';
import { fonts } from '../../../assets/fonts';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import { useNavigation } from '@react-navigation/native';

const PendingOrderLists = (
    {
        productName,
        productImage,
        productPrice,
        quantity
    }
) => {

    const navigation = useNavigation();

    return (
        <View style={{ paddingVertical: vs(10), backgroundColor: colors.white, marginTop: vs(15), flexDirection: 'row', justifyContent: 'space-between', borderRadius: 5 }}>
            <View style={{ flexDirection: 'row', flex: 1 }}>
                <Image source={productImage}
                    style={{ height: vs(70), width: hs(70), resizeMode: 'contain', }} />
                <View style={{ marginHorizontal: hs(10) }}>
                    <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>{productName}</Text>
                    <Text style={{ marginTop: vs(5), fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, }}>{productPrice}</Text>
                </View>
            </View>

            <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                <Text style={{ textAlign: 'right', marginHorizontal: hs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>{quantity} items</Text>
                <Pressable onPress={() => navigation.navigate('OrderDetail')}>
                    <Text style={{ textAlign: 'right', alignSelf: 'flex-end', marginHorizontal: hs(10), fontSize: fs(14), color: colors.Primary_Blue, fontFamily: fonts.regular }}>View Details</Text>
                </Pressable>
            </View>
        </View>
    );
};


export default PendingOrderLists;
