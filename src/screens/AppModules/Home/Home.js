import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, TextInput } from 'react-native';
import { fonts } from '../../../assets/fonts';
import { getStatusBarHeight } from '../../../utility/Globals';
import { hs, vs, fs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../../assets/images';

const Home = () => {

    const navigation = useNavigation();
    const statusBarHeight = getStatusBarHeight();
    const renderHeader = () => {
        return (
            <View style={{ width: '100%', paddingTop: statusBarHeight }}>
                <View style={{
                    paddingHorizontal: hs(15),
                    paddingTop: vs(15),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    backgroundColor: colors.Primary_Blue,
                }}>
                    <Text style={{
                        fontSize: fs(26),
                        color: colors.white,
                        fontFamily: fonts.bold
                    }}>Hello Devid,</Text>
                    <Image source={images.filter}
                        style={{
                            height: vs(30),
                            width: hs(30),

                            resizeMode: 'contain'
                        }} />
                </View>
                <View style={{
                    paddingHorizontal: hs(15),
                    paddingVertical: vs(15),
                    flexDirection: 'row',
                    alignItems: 'center'
                }}>
                    <TextInput placeholder='Search for milk products' />
                </View>
            </View>

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
            <Text>Home</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50',
    },
});

export default Home;
