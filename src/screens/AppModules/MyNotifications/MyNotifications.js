import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { colors } from '../../../assets/colors/colors';
import { fonts } from '../../../assets/fonts';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import { images } from '../../../assets/images';

const MyNotifications = () => {

    const Lorem = 'Lorem Ipsum is simply dummy text printing and typesetting industry.';
    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="Notifications" onPress={() => navigation.goBack()} />
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
            <ScrollView style={{marginBottom:vs(20)}} showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: hs(15), marginTop: vs(15) }}>
                    <Text style={{ fontSize: fs(18), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>New</Text>

                    <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'flex-start', }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 50, borderColor: colors.Gray_Border }}>
                            <Image source={images.app_logo}
                                style={{ height: vs(30), width: hs(30), resizeMode: 'contain', }} />
                        </View>
                        <View style={{ marginLeft: hs(10), flex: 1 }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>{Lorem}</Text>
                            <Text style={{ marginTop: vs(3), fontSize: fs(12), color: colors.black, fontFamily: fonts.regular }}>2 hour ago</Text>
                        </View>
                    </View>

                    <Text style={{ marginTop: vs(15), fontSize: fs(18), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Earlier</Text>

                    <View style={{ marginTop: vs(15), flexDirection: 'row', alignItems: 'flex-start', }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 50, borderColor: colors.Gray_Border }}>
                            <Image source={images.app_logo}
                                style={{ height: vs(30), width: hs(30), resizeMode: 'contain', }} />
                        </View>
                        <View style={{ marginLeft: hs(10), flex: 1 }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>{Lorem}</Text>
                            <Text style={{ marginTop: vs(3), fontSize: fs(12), color: colors.black, fontFamily: fonts.regular }}>2 hour ago</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'flex-start', }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 50, borderColor: colors.Gray_Border }}>
                            <Image source={images.app_logo}
                                style={{ height: vs(30), width: hs(30), resizeMode: 'contain', }} />
                        </View>
                        <View style={{ marginLeft: hs(10), flex: 1 }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>{Lorem}</Text>
                            <Text style={{ marginTop: vs(3), fontSize: fs(12), color: colors.black, fontFamily: fonts.regular }}>2 hour ago</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'flex-start', }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 50, borderColor: colors.Gray_Border }}>
                            <Image source={images.app_logo}
                                style={{ height: vs(30), width: hs(30), resizeMode: 'contain', }} />
                        </View>
                        <View style={{ marginLeft: hs(10), flex: 1 }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>{Lorem}</Text>
                            <Text style={{ marginTop: vs(3), fontSize: fs(12), color: colors.black, fontFamily: fonts.regular }}>2 hour ago</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'flex-start', }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 50, borderColor: colors.Gray_Border }}>
                            <Image source={images.app_logo}
                                style={{ height: vs(30), width: hs(30), resizeMode: 'contain', }} />
                        </View>
                        <View style={{ marginLeft: hs(10), flex: 1 }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>{Lorem}</Text>
                            <Text style={{ marginTop: vs(3), fontSize: fs(12), color: colors.black, fontFamily: fonts.regular }}>2 hour ago</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'flex-start', }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 50, borderColor: colors.Gray_Border }}>
                            <Image source={images.app_logo}
                                style={{ height: vs(30), width: hs(30), resizeMode: 'contain', }} />
                        </View>
                        <View style={{ marginLeft: hs(10), flex: 1 }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>{Lorem}</Text>
                            <Text style={{ marginTop: vs(3), fontSize: fs(12), color: colors.black, fontFamily: fonts.regular }}>2 hour ago</Text>
                        </View>
                    </View>

                    <View style={{ marginTop: vs(10), flexDirection: 'row', alignItems: 'flex-start', }}>
                        <View style={{ padding: 5, borderWidth: 1, borderRadius: 50, borderColor: colors.Gray_Border }}>
                            <Image source={images.app_logo}
                                style={{ height: vs(30), width: hs(30), resizeMode: 'contain', }} />
                        </View>
                        <View style={{ marginLeft: hs(10), flex: 1 }}>
                            <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>{Lorem}</Text>
                            <Text style={{ marginTop: vs(3), fontSize: fs(12), color: colors.black, fontFamily: fonts.regular }}>2 hour ago</Text>
                        </View>
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
});


export default MyNotifications;
