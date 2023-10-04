import React, { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { fs, hs, screenHeight, screenWidth, vs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import { useNavigation } from '@react-navigation/native';

const ProductLists = (
    {
        id,
        productName,
        productImage,
        productPrice,
        select,
        selectHandler
    }
) => {

    const navigation = useNavigation();

    return (
        <Pressable  key={id} 
        onPress={()=>navigation.navigate('ProductDetail')}
        style={{ height: 'auto', width: screenWidth * 0.44, padding: 10, borderWidth: 1, borderRadius: 5, borderColor: colors.Gray_Border, margin: 5 ,backgroundColor:colors.white}}>

            <Pressable style={{ position: 'absolute', top: 5, right: 5 }}>
                <Image source={images.like1} style={{ height: vs(20), width: hs(20), resizeMode: 'contain', position: 'absolute', top: 0, right: 0 }} />
            </Pressable>

            <View style={{ alignItems: 'center', justifyContent: 'center', marginTop: vs(10), }}>
                <Image source={productImage}
                    style={{
                        height: vs(120),
                        width: hs(120),
                        resizeMode: 'contain',
                    }}
                />
            </View>
            <View style={{marginTop:vs(10)}}>
            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>{productName}</Text>
            <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>{productPrice}</Text>
            </View>
        </Pressable>
    );
};


export default ProductLists;
