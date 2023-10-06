import React, { useEffect, useRef } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { fs, mpStyle, vs } from '../utility/ResponsiveStyle';
import { fonts } from '../assets/fonts';
import Animated from 'react-native-reanimated';

const AnimatedInput = (
    {
        inputStyle,
        mpInput,
        containerStyle,
        mpContainer,
        placeholder,
        value,
        leftIcon,
        rightIcon,
        onBlur,
        onFocus,
        onChangeText = () => { },
        mpErrorStyle,
        touched,
        errors,
        height = 40,
        textInCenter = height / 4 + 2,
        textOnTop = -height / 4 + 2,
        keyboardType,
        ...props
    }
) => {

    const textInputRef = useRef();
    const textPosition = useSharedValue(textInCenter);
    const fontSize = useSharedValue(14);

    useEffect(() => {
        if (value) {
            console.log('value', value);
            textPosition.value = textOnTop;
            fontSize.value = 12;
        }
    }, [value]);

    const AnimattedTextStyle = useAnimatedStyle(() => {
        return {
            top: withTiming(textPosition.value, {
                duration: 150
            }),
            fontSize: withTiming(fontSize.value, {
                duration: 150
            })
        };
    });
    return (
        <>
            <Pressable
                style={[{
                    height: height,
                    // justifyContent: 'center',
                    ...mpStyle({ ...mpContainer }),
                }, containerStyle]}
                onPress={() => {
                    textInputRef.current?.focus();
                }}
            >
                {leftIcon && leftIcon()}
                <TextInput
                    ref={textInputRef}
                    onChangeText={onChangeText}
                    placeholder=''
                    style={[{
                        padding: 0,
                        // top: 4,
                        fontFamily: fonts.regular,
                        ...mpStyle({ ...mpInput }),
                    }, inputStyle]}
                    onFocus={() => {
                        textPosition.value = textOnTop;
                        fontSize.value = 12;
                        onFocus && onFocus();
                    }}
                    onBlur={() => {
                        if (!value) {
                            textPosition.value = textInCenter;
                            fontSize.value = 14;
                        }
                        onBlur && onBlur();
                    }}
                    {...props}
                    value={value}
                />
                {rightIcon && rightIcon()}

                <Animated.Text
                    style={[{
                        position: 'absolute',
                        color: 'grey',
                        fontFamily: fonts.regular,
                        left: 5,
                        backgroundColor: 'white',
                        // marginHorizontal: 5,
                        paddingHorizontal: 5,
                        fontFamily: fonts.regular,
                    }, AnimattedTextStyle]}
                >{placeholder}</Animated.Text>
            </Pressable>

            {touched && errors &&
                <View
                    style={{
                        alignSelf: 'flex-start',
                        ...mpStyle({ ...mpErrorStyle }),
                    }}
                >
                    <Text
                        style={{
                            fontSize: fs(10),
                            marginTop: vs(5),
                            color: 'red',
                            fontFamily: fonts.regular || ''
                        }}

                    >{errors}</Text>
                </View>
            }
        </>
    );
};


export default AnimatedInput;