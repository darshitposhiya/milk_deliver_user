import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { colors } from '../../../assets/colors/colors';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import TextInputContainer from '../../../components/TextInputContainer';
import Btn from '../../../components/Btn';

const AddNewCard = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="Add New Card" onPress={() => navigation.goBack()} />
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
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
                <View style={{ paddingVertical: vs(10), backgroundColor: 'white', marginHorizontal: hs(15), marginTop: vs(20), borderRadius: 5, }} >

                    <View style={{ marginHorizontal: hs(15), marginTop: vs(10), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: fs(18), fontFamily: fonts.bold, fontWeight: '700', color: colors.black }}>Add New Card</Text>
                        {/* <Pressable onPress={() => navigation.goBack()}>
                            <Image source={images.close}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                        </Pressable> */}
                    </View>

                    <View style={{ marginTop: vs(15), borderWidth: 0.5, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <View style={{ marginHorizontal: hs(15) }}>
                        <TextInputContainer
                            placeholder="Card Holder Name"
                            containerStyle={{ marginTop: vs(20) }}
                        />
                        <TextInputContainer
                            placeholder="Card Number"
                            containerStyle={{ marginTop: vs(15) }}
                            keyboardType="numeric"

                        />

                        <View style={{ marginTop: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <TextInputContainer
                                placeholder="Valid till"
                                containerStyle={{ width: '49%' }}
                                rightIcon={() => (
                                    <Pressable>
                                        <Image source={images.downIcon}
                                            style={{ height: vs(15), width: hs(15), resizeMode: 'contain' }} />
                                    </Pressable>
                                )}
                            />
                            <TextInputContainer
                                placeholder="Cvv"
                                containerStyle={{ width: '49%' }}
                                keyboardType="numeric"
                            />
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', marginHorizontal: hs(10), marginBottom: vs(10) }}>
                        <Btn onPress={() => navigation.goBack()}
                            title="Add"
                            btnStyle={{ marginTop: vs(30), }}
                        />
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AddNewCard;
