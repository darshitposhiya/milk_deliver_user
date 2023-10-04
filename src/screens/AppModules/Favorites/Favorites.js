import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { getStatusBarHeight } from '../../../utility/Globals';
import { colors } from '../../../assets/colors/colors';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import { product_data } from '../../../assets/data/data';
import ProductLists from '../../../components/ListViews/ProductLists/ProductLists';

const Favorites = () => {

    const navigation = useNavigation();
    const statusBarHeight = getStatusBarHeight();

    const _renderProductLists = ({ item }) => {
        return <ProductLists {...item} />
    }
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
                    }}>Favorites</Text>
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
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ position: 'relative' }}>
                    <View style={{ height: vs(45), backgroundColor: colors.Primary_Blue, width: '100%', position: 'absolute' }} />
                    <View style={{ marginHorizontal: hs(10), }}>
                        <FlatList
                            data={product_data}
                            renderItem={_renderProductLists}
                            keyExtractor={(_, index) => index.toString()}
                            numColumns={2}
                            showsVerticalScrollIndicator={false}
                            contentContainerStyle={{ paddingBottom: vs(20) }}
                        />
                    </View>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,

    },
});

export default Favorites;
