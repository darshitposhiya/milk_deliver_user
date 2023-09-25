import React, { Component } from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { fonts } from '../assets/fonts';
import { colors } from '../assets/colors/colors';
import { fs, vs } from '../utility/ResponsiveStyle';

const Btn = (
    {
        onPress,
        leftIcon = () => { },
        rightIcon = () => { },
        title,
        btnStyle,
        btnTextStyle
    }
) => {
    return (
        <Pressable
            onPress={onPress}
            style={{ ...styles.btn, ...btnStyle }}>

            {leftIcon ? leftIcon() : null}
            <Text
                style={{ ...styles.btnlabel, ...btnTextStyle }}
            >
                {title}
            </Text>
            {rightIcon ? rightIcon() : null}
        </Pressable>
    );
};

const styles = StyleSheet.create({
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        height: 55,
        borderRadius: 25,
        width: '100%',
        backgroundColor: colors.Primary_Blue
    },
    btnlabel: {
        fontFamily: fonts.bold,
        color: colors.white,
        fontSize: fs(22),
    }
});

export default Btn;
