import React, { Component } from 'react';
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import { fonts } from '../assets/fonts';
import { images } from '../assets/images';
import { vs, hs, fs } from '../utility/ResponsiveStyle';
import { colors } from '../assets/colors/colors';
import { getStatusBarHeight } from '../utility/Globals';

const Header = (
    {
        heading,
        onPress,
        rightIcon,
        headerStyle,
        headerTextStyle,
        searchBar,
    }
) => {

    const statusBarHeight = getStatusBarHeight();

    return (
        <View style={{ width: '100%', backgroundColor: colors.Primary_Blue, paddingTop: statusBarHeight }}>
            <View style={{ ...styles.headerStyle, ...headerStyle }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable onPress={onPress}>
                        <Image source={images.back_icon}
                            style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }}
                        />
                    </Pressable>
                    <Text style={{ ...styles.headerTextStyle, ...headerTextStyle }}>{heading}</Text>
                </View>

                {rightIcon && rightIcon()}
            </View>
            {searchBar && searchBar()}
        </View>
    );
};

const styles = StyleSheet.create({
    headerStyle: {
        paddingHorizontal: hs(15),
        paddingVertical: vs(15),
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    headerTextStyle: {
        fontSize: fs(20),
        color: colors.white,
        fontFamily: fonts.bold,
        marginHorizontal: hs(10)
    }

});

export default Header;
