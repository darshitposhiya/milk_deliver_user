import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { colors } from '../../../assets/colors/colors';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';
import { images } from '../../../assets/images';
import Slider from '@react-native-community/slider';
import AuthFooter from '../../../components/AuthFooter';
import Btn from '../../../components/Btn';

const Filter = () => {

    const navigation = useNavigation();
    const [TopRated, setTopRated] = useState(false);
    const [CostHighToLow, setCostHighToLow] = useState(false);
    const [CostLowToHigh, setCostLowToHigh] = useState(false);
    const [MostPopular, setMostPopular] = useState(false);
    const [value, setValue] = useState(10)

    const handleValueChange = (value) => {
        setValue(value)
        console.log(value, "value")
    }
    const renderHeader = () => {
        return (
            <Header heading="Filter" onPress={() => navigation.goBack()} />
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
            <View style={{ marginHorizontal: hs(15) }}>
                <Text style={{ marginTop: vs(20), fontSize: fs(18), fontFamily: fonts.bold, fontWeight: '700', color: colors.black }}>Shot By</Text>

                <Pressable onPress={() => setTopRated(!TopRated)}>
                    <View style={{ marginTop: vs(15), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[styles.filterText,
                        { color: TopRated ? colors.Primary_Blue : colors.black }]}>Top Rated</Text>
                        {
                            TopRated ?
                                (<Image source={images.chekmark}
                                    style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                                )
                                :
                                ('')
                        }
                    </View>
                </Pressable>

                <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5, marginTop: vs(10) }} />

                <Pressable onPress={() => setCostHighToLow(!CostHighToLow)}>
                    <View style={{ marginTop: vs(10), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[styles.filterText,
                        { color: CostHighToLow ? colors.Primary_Blue : colors.black }]}>Cost High To Low</Text>
                        {
                            CostHighToLow ?
                                (<Image source={images.chekmark}
                                    style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                                )
                                :
                                ('')
                        }
                    </View>
                </Pressable>

                <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5, marginTop: vs(10) }} />

                <Pressable onPress={() => setCostLowToHigh(!CostLowToHigh)}>
                    <View style={{ marginTop: vs(10), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[styles.filterText,
                        { color: CostLowToHigh ? colors.Primary_Blue : colors.black }]}>Cost Low To High</Text>
                        {
                            CostLowToHigh ?
                                (<Image source={images.chekmark}
                                    style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                                )
                                :
                                ('')
                        }
                    </View>
                </Pressable>

                <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5, marginTop: vs(10) }} />

                <Pressable onPress={() => setMostPopular(!MostPopular)}>
                    <View style={{ marginTop: vs(10), flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={[styles.filterText,
                        { color: MostPopular ? colors.Primary_Blue : colors.black }]}>Most Popular</Text>
                        {
                            MostPopular ?
                                (<Image source={images.chekmark}
                                    style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                                )
                                :
                                ('')
                        }
                    </View>
                </Pressable>

                <View style={{ borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5, marginTop: vs(10) }} />

                <Text style={{ marginTop: vs(15), fontSize: fs(18), fontFamily: fonts.bold, fontWeight: '700', color: colors.black }}>Price</Text>

                <View style={{ marginTop: vs(10) }}>
                    <Text style={{ fontSize: fs(16), fontFamily: fonts.bold, fontWeight: '700', color: colors.Primary_Blue ,alignSelf:'center'}}><Text>$ 1 to </Text>${value}</Text>
                    <Slider
                        style={{ width: '100%', height: 40 }}
                        minimumValue={1}
                        maximumValue={300}
                        minimumTrackTintColor={colors.Primary_Blue}
                        maximumTrackTintColor="#000000"
                        value={value}
                        step={1}
                        onValueChange={handleValueChange}
                        
                    />
                </View>
            </View>
            <AuthFooter>
                <View style={{ marginHorizontal: 15, flexDirection: 'row', alignItems: 'center', }}>
                    <Btn title="Apply" btnStyle={{ width: '100%' }} />
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
    filterText: {
        fontSize: fs(16),
        fontFamily: fonts.bold
    }
});

export default Filter;
