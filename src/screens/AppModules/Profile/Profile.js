import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import { getStatusBarHeight } from '../../../utility/Globals';
import { hs, vs, fs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { AuthStack } from '../../../navigator/NavActions';
const Profile = () => {

    const navigation = useNavigation();
    const statusBarHeight = getStatusBarHeight();
    const renderHeader = () => {
        return (
            <View style={{ width: '100%', paddingTop: statusBarHeight, backgroundColor: colors.Primary_Blue }}>
                <View style={{
                    marginHorizontal: hs(15),
                    paddingVertical: vs(15),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: fs(26),
                        color: colors.white,
                        fontFamily: fonts.bold,
                        fontWeight: '700'
                    }}>Profile</Text>

                    <Pressable onPress={() => navigation.navigate('EditProfile')}
                        style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: fs(20), color: colors.white, fontFamily: fonts.regular, }}>Edit</Text>
                        <Image source={images.rightIcon}
                            style={{
                                height: vs(15),
                                width: hs(15),
                                resizeMode: 'contain'
                            }} />
                    </Pressable>
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
            <ScrollView style={{ marginBottom: vs(20) }} showsVerticalScrollIndicator={false}>
                <View style={{ position: 'relative' }}>
                    <View style={{ height: vs(45), backgroundColor: colors.Primary_Blue, width: '100%', position: 'absolute' }} />

                    <View style={{ marginHorizontal: hs(15) }}>
                        <View style={{ paddingVertical: vs(20), paddingHorizontal: hs(10), backgroundColor: colors.white, flexDirection: 'row', alignItems: 'center', borderRadius: 5 }}>
                            <Image source={images.useImage}
                                style={{ height: vs(60), width: hs(60), resizeMode: 'contain', }} />
                            <View style={{ marginHorizontal: hs(10) }}>
                                <Text style={{ fontSize: fs(18), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Ricardo McDonald</Text>
                                <Text style={{ marginTop: vs(3), fontSize: fs(14), color: colors.Gray_text, fontFamily: fonts.regular, }}>corkery_dakota@gmail.com</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={{ marginTop: vs(15), marginHorizontal: hs(15), borderRadius: 5, backgroundColor: colors.white }}>
                    <Pressable onPress={() => navigation.navigate('MyOrders')}
                        style={{ paddingHorizontal: hs(10), paddingVertical: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.myOrders}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                            <Text style={{ marginHorizontal: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>My Orders</Text>
                        </View>

                        <Image source={images.rightIcon}
                            style={{ height: vs(10), width: hs(10), resizeMode: 'contain', tintColor: colors.Gray_Border }} />
                    </Pressable>

                    <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <Pressable onPress={() => navigation.navigate('MySubscriptions')}
                        style={{ paddingHorizontal: hs(10), paddingVertical: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.mySubscription}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                            <Text style={{ marginHorizontal: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>My Subscriptions</Text>
                        </View>

                        <Image source={images.rightIcon}
                            style={{ height: vs(10), width: hs(10), resizeMode: 'contain', tintColor: colors.Gray_Border }} />
                    </Pressable>

                    <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <Pressable onPress={() => navigation.navigate('Address')}
                        style={{ paddingHorizontal: hs(10), paddingVertical: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.myAddress}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                            <Text style={{ marginHorizontal: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>My Address</Text>
                        </View>

                        <Image source={images.rightIcon}
                            style={{ height: vs(10), width: hs(10), resizeMode: 'contain', tintColor: colors.Gray_Border }} />
                    </Pressable>

                    <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <Pressable onPress={() => navigation.navigate('MyNotifications')}
                        style={{ paddingHorizontal: hs(10), paddingVertical: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.myNotification}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                            <Text style={{ marginHorizontal: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>Notifications</Text>
                        </View>

                        <Image source={images.rightIcon}
                            style={{ height: vs(10), width: hs(10), resizeMode: 'contain', tintColor: colors.Gray_Border }} />
                    </Pressable>

                    <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <Pressable onPress={() => navigation.navigate('MyWallet')}
                        style={{ paddingHorizontal: hs(10), paddingVertical: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.myWallet}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                            <Text style={{ marginHorizontal: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>My Wallet</Text>
                        </View>

                        <Image source={images.rightIcon}
                            style={{ height: vs(10), width: hs(10), resizeMode: 'contain', tintColor: colors.Gray_Border }} />
                    </Pressable>

                    <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <Pressable onPress={() => navigation.navigate('MyLanguage')}
                        style={{ paddingHorizontal: hs(10), paddingVertical: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.language}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                            <Text style={{ marginHorizontal: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>Language</Text>
                        </View>

                        <Image source={images.rightIcon}
                            style={{ height: vs(10), width: hs(10), resizeMode: 'contain', tintColor: colors.Gray_Border }} />
                    </Pressable>

                    <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <Pressable onPress={() => navigation.navigate('Help')}
                        style={{ paddingHorizontal: hs(10), paddingVertical: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.help}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                            <Text style={{ marginHorizontal: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>Help</Text>
                        </View>

                        <Image source={images.rightIcon}
                            style={{ height: vs(10), width: hs(10), resizeMode: 'contain', tintColor: colors.Gray_Border }} />
                    </Pressable>

                    <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                    <Pressable onPress={() => navigation.dispatch(AuthStack)}
                        style={{ paddingHorizontal: hs(10), paddingVertical: vs(15), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={images.logout}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                            <Text style={{ marginHorizontal: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>Logout</Text>
                        </View>

                        <Image source={images.rightIcon}
                            style={{ height: vs(10), width: hs(10), resizeMode: 'contain', tintColor: colors.Gray_Border }} />
                    </Pressable>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default Profile;
