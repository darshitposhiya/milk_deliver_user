import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, FlatList, ScrollView, Pressable } from 'react-native';
import { fonts } from '../../../assets/fonts';
import { getStatusBarHeight } from '../../../utility/Globals';
import { hs, vs, fs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../../assets/images';
import { categry_data, product_data } from '../../../assets/data/data';
import CategoryLists from '../../../components/ListViews/CategoryLists/CategoryLists';
import ProductLists from '../../../components/ListViews/ProductLists/ProductLists';

const Home = () => {

    const navigation = useNavigation();
    const statusBarHeight = getStatusBarHeight();
    const [select, setSelect] = useState(false);

    const _renderCategoryLists = ({ item }) => {
        return <CategoryLists {...item} />
    }

    const _renderProductLists = ({ item }) => {
        return <ProductLists {...item}
            selectHandler={() => {
                setSelect(item)
                // ((item) =>
                //     item.map((product) =>
                //         product.id == item.id
                //             ? { ...product.id, liked: !product.liked }
                //             : product
                //     ))
            }}
            select={select == item}
        />
    }
    console.log(select, 'product')
    const renderHeader = () => {
        return (
            <View style={{ width: '100%', paddingTop: statusBarHeight, backgroundColor: colors.Primary_Blue }}>
                <View style={{
                    marginHorizontal: hs(15),
                    paddingTop: vs(15),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <Text style={{
                        fontSize: fs(26),
                        color: colors.white,
                        fontFamily: fonts.bold,
                        fontWeight: '700'
                    }}>Hello Devid,</Text>

                    <Pressable>
                        <Image source={images.filter}
                            style={{
                                height: vs(35),
                                width: hs(35),
                                resizeMode: 'contain'
                            }} />
                    </Pressable>
                </View>
                <View style={{
                    marginHorizontal: hs(15),
                    marginVertical: vs(15),
                    backgroundColor: colors.white,
                    borderRadius: 5
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={images.search} style={{ marginHorizontal: hs(10), height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                        <TextInput placeholder='Search for milk products' placeholderTextColor={colors.Gray_text} style={{ flex: 1 }} />
                    </View>
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
            <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
                <View style={{ marginHorizontal: hs(15) }}>
                    <Text style={{ marginTop: vs(10), fontSize: fs(22), fontFamily: fonts.bold, fontWeight: '700', color: colors.black }}>Category</Text>

                    <FlatList
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        data={categry_data}
                        renderItem={_renderCategoryLists}
                        keyExtractor={(_, index) => index.toString()}
                    />

                    <Text style={{ fontSize: fs(22), fontFamily: fonts.bold, fontWeight: '700', color: colors.black }}>Most popular</Text>
                </View>

                <View style={{ marginHorizontal: hs(10), marginTop: vs(10) }}>
                    <FlatList
                        data={product_data}
                        renderItem={_renderProductLists}
                        keyExtractor={(_, index) => index.toString()}
                        numColumns={2}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{ paddingBottom: vs(20) }}
                    />
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

export default Home;
