import React, { Component } from 'react';
import { View, Text, Pressable } from 'react-native';
import { fs,vs,hs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';

const CountryLists = ({ flag, dial_code, name, goToCountry }) => {

    return (

        <Pressable onPress={goToCountry}>
            <View style={{
                flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
                paddingHorizontal: hs(15), height: 50,
            }}>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text style={{ fontSize: fs(20) }}>{flag}</Text>
                    <Text style={{ fontSize: fs(16), color: colors.black, marginHorizontal: hs(10) }}>{name} ({dial_code})</Text>
                </View>

            </View>
        </Pressable>
    );
};


export default React.memo(CountryLists);
