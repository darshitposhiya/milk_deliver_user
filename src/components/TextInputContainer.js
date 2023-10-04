import React, { Component } from 'react';
import { View, TextInput, Pressable, Image, StyleSheet } from 'react-native';
import { images } from '../assets/images';
import { vs, hs, fs } from '../utility/ResponsiveStyle';
import { colors } from '../assets/colors/colors';
import { fonts } from '../assets/fonts';

const TextInputContainer = (
    {
        placeholder,
        containerStyle,
        inputStyle,
        rightIcon

    }
) => {
    return (
        <View style={{ ...styles.containerStyle, ...containerStyle }}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.Gray_text}
                style={{ ...styles.inputStyle, ...inputStyle }} />
           
                {rightIcon && rightIcon()}
        </View>
    );
};

const styles = StyleSheet.create({
    containerStyle: {
        paddingHorizontal: hs(10),
        height: 52,
        backgroundColor: colors.Light_Gray,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5
    },
    inputStyle: {
        flex: 1,
        fontSize: fs(16)
    }
})
export default TextInputContainer;
