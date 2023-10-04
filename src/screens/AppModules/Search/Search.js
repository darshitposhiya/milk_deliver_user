import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { images } from '../../../assets/images';
import { colors } from '../../../assets/colors/colors';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';
import { getStatusBarHeight } from '../../../utility/Globals';
import { product_data } from '../../../assets/data/data';
import ProductLists from '../../../components/ListViews/ProductLists/ProductLists';

const Search = () => {

    const navigation = useNavigation();
    const statusBarHeight = getStatusBarHeight();
    const [search, setSearch] = useState('');
    const [searchedProduct, setSearchedProduct] = useState([]);
   

    useEffect(() => {
        if (search) {
            setSearchedProduct(product_data); 
            searchHandler();
        }
    }, [search]);

    const searchHandler = () => {
        //  let text = search.toLowerCase();

        let products = product_data.filter((item, index) => {
            return item?.productName?.toLowerCase().includes(search.toLowerCase());
        });
        setSearchedProduct(products);
    };
    const _renderProductLists = ({ item }) => {
        return <ProductLists {...item} />
    }
    console.log(search, 'search')
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
                    }}>Search</Text>

                    <Pressable>
                        <Image source={images.filter}
                            style={{
                                height: vs(35),
                                width: hs(35),
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
            <View style={{ position: 'relative' }}>
                <View style={{ height: vs(78), backgroundColor: colors.Primary_Blue, width: '100%', position: 'absolute' }} />
                <Pressable onPress={() => navigation.navigate('SearchScreen')}
                    style={{
                        marginHorizontal: hs(15),
                        marginVertical: vs(15),
                        backgroundColor: colors.white,
                        borderRadius: 5
                    }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={images.search} style={{ marginHorizontal: hs(10), height: vs(20), width: hs(20), resizeMode: 'contain' }} />
                        <TextInput
                            placeholder='Search for milk products'
                            placeholderTextColor={colors.Gray_text}
                            value={search}
                            onChangeText={setSearch}
                            style={{ flex: 1 }}
                            editable={false}
                            
                        />
                    </View>
                </Pressable>
            </View>

            <View style={{ marginHorizontal: hs(10), marginTop: vs(15) }}>
                <FlatList
                    data={searchedProduct}
                    renderItem={_renderProductLists}
                    keyExtractor={(_, index) => index.toString()}
                    numColumns={2}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: vs(20) }}
                />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
});

export default Search;
