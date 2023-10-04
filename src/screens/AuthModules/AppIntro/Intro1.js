import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { images } from '../../../assets/images';
import { vs } from '../../../utility/ResponsiveStyle';
import styles from './Styles';

const Intro1 = () => {
    return (
        <>
            <Image source={images.intro1}
                style={styles.introScreenImg} />

            <View style={styles.bottom_view}>
                <Text style={styles.into_title}>
                    Feeling thirsty
                </Text>

                <View>
                    <Text style={styles.lorem_text}>Discover service near you lorem ipsum dolor <Text>is amet near you lorem.</Text></Text>
                </View>
            </View>
        </>
    );
};

export default Intro1;
