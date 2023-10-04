import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { hs, vs, fs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { fonts } from '../../../assets/fonts';
import { images } from '../../../assets/images';

const MyLanguage = () => {

    const navigation = useNavigation();
    const [isSelectedLanguage, setIsSelectedLanguage] = useState('English');
    const renderHeader = () => {
        return (
            <Header heading="My Language" onPress={() => navigation.goBack()} />
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
            <View style={{ marginHorizontal: hs(15), alignItems: 'center' }}>

                <Pressable onPress={() => setIsSelectedLanguage('English')}
                    style={[styles.selectLangBtn,
                    { borderColor: isSelectedLanguage == 'English' ? colors.Primary_Blue : colors.Gray_Border }
                    ]}>
                    <Text style={styles.languageText}>English</Text>
                    {isSelectedLanguage == 'English' ?
                        (<Image source={images.selected}
                            style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />)
                        :
                        ''
                    }
                </Pressable>

                <Pressable onPress={() => setIsSelectedLanguage('French')}
                    style={[styles.selectLangBtn,
                    { borderColor: isSelectedLanguage == 'French' ? colors.Primary_Blue : colors.Gray_Border }
                    ]}>
                    <Text style={styles.languageText}>French</Text>
                    {isSelectedLanguage == 'French' ?
                        (<Image source={images.selected}
                            style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />)
                        :
                        ''
                    }
                </Pressable>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    selectLangBtn: {
        marginTop: vs(20),
        padding: 10,
        height: vs(55),
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: colors.Gray_Border,
        borderRadius: 5
    },
    languageText: {
        fontSize: fs(18),
        color: colors.black,
        fontFamily: fonts.bold,
    }
});

export default MyLanguage;
