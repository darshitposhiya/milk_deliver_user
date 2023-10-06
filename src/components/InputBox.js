import React, { Component } from 'react';
import { View, Text, Pressable,TextInput } from 'react-native';
import { fonts } from '../assets/fonts';
import { colors } from '../assets/colors/colors';
import { mpStyle,vs,hs,fs } from '../utility/ResponsiveStyle';

const InputBox = (
    {
        onPress,
        inputHeight,
        radius = 5,
        textSize,
        leftIcon,
        rightIcon,
        mpInput,
        mpContainer,
        containerStyle,
        inputStyle,
        touched,
        errors,
        mpErrorStyle,
        mpInputContainer,
        ...restProps
    }
) => {
    return (
        <View style={{
            ...mpStyle({ ...mpContainer })
        }}>
            <Pressable
                style={[{
                    height: inputHeight && vs(inputHeight),
                    borderWidth: 1,
                    borderColor: 'grey',
                    borderRadius: radius,
                    flexDirection: 'row',
                    alignItems: "center",
                    ...mpStyle({ ...mpInputContainer }),
                }, containerStyle]}
                onPress={onPress}
            >
                {leftIcon && leftIcon()}
                <TextInput
                    style={[{
                        width: '85%',
                        height: vs(40),
                        ...mpStyle({ ...mpInput }),
                        fontSize: fs(textSize || 14),
                        fontFamily: fonts.regular,
                        color: colors.black,
                        paddingVertical: 0
                    }, inputStyle]}
                    {...restProps}
                />
                {rightIcon && rightIcon()}
            </Pressable>
            {touched && errors &&
                <View>
                    <Text
                        style={{
                            color: 'red',
                            textAlign: 'left',
                            fontFamily: fonts.regular,
                            fontSize: fs(10),
                            marginTop:vs(5)
                        }}
                    >{errors}</Text>
                </View>
            }

        </View>
    );
};

export default InputBox;
