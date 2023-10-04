import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { fs, hs, vs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';
import { colors } from '../../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';

const CategoryLists = (
    {
        id,
        cat,
        catname
    }
) => {

    const navigation = useNavigation();
    return (
        <>
            <Pressable onPress={() => {navigation.navigate('Category',{category:catname})}} 
            style={styles.catList} >
                <Image source={cat} style={styles.catIcon}  />
                <Text style={styles.catTitle}>{catname}</Text>
            </Pressable>
           
        </>
    );
};

const styles = StyleSheet.create({
    catList: {
        marginVertical: vs(10),
        marginHorizontal: hs(5),
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.white,      
    },
    catIcon: {
        width: hs(60),
        height: vs(60),
        borderRadius: 100,
        resizeMode:'contain'
    },
    catTitle: {
        color: colors.black,
        fontSize: fs(14),
        marginTop:vs(10),
        fontFamily:fonts.regular
    },
})
export default CategoryLists;
