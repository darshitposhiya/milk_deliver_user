import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { colors } from '../../../assets/colors/colors';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import AuthFooter from '../../../components/AuthFooter';

const Address = () => {

    const navigation = useNavigation();
    const [address, setAddress] = useState(true);
    const renderHeader = () => {
        return (
            <Header heading="My Address" onPress={() => navigation.goBack()} />
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
            <View style={{ marginTop: vs(20), marginHorizontal: hs(15), paddingHorizontal: 10, paddingVertical: vs(15), backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '75%' }}>
                    {
                        address ?
                            (<Pressable onPress={() => setAddress(!address)}>
                                <Image source={images.selectedAddress}
                                    style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                            </Pressable>)
                            :
                            (<Pressable onPress={() => setAddress(!address)}>
                                <Image source={images.selectAddress}
                                    style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                            </Pressable>)
                    }

                    <Text style={{ marginLeft: hs(10),marginRight:hs(5), flex: 1, fontSize: fs(14), color: colors.black, fontFamily: fonts.regular, textAlign: 'left' }}>490 Lauren Drive, Madition, Wiscosin, United States.</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable style={{ marginHorizontal: hs(10) }}>
                        <Image source={images.editAddress}
                            style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                    </Pressable>
                    <Pressable>
                        <Image source={images.deleteAddress}
                            style={{marginLeft:hs(10), height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                    </Pressable>
                </View>
            </View>

            <AuthFooter>
                <View style={{ flexDirection: 'row', alignItems: 'center', width: '100%', justifyContent: 'flex-end', }}>
                    <Pressable onPress={() => navigation.navigate('AddNewAddress')}
                        style={{ marginRight: hs(15), marginBottom: vs(15) }}>
                        <Image source={images.addNewAddress}
                            style={{ height: vs(60), width: hs(60), resizeMode: 'contain' }} />
                    </Pressable>
                </View>
            </AuthFooter>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
});

export default Address;
