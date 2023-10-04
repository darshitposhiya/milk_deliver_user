import React, { useLayoutEffect, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, Pressable, TextInput, FlatList } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation, useRoute } from '@react-navigation/native';
import { images } from '../../../assets/images';
import { colors } from '../../../assets/colors/colors';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';
import { product_data } from '../../../assets/data/data';
import ProductLists from '../../../components/ListViews/ProductLists/ProductLists';
import { getStatusBarHeight } from '../../../utility/Globals';

const Category = () => {

    const navigation = useNavigation();
    const statusBarHeight = getStatusBarHeight();
    const route = useRoute();
    const { category } = route.params;
    const [itemList, setItemList] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        let tempData = product_data;
        let tem = [];
        tempData.map(item => {
            if (item.category == category) {
                tem.push(item);
            }
        })
        setItemList(tem)
    }, []);

    useEffect(() => {
        if (search) {
            searchHandler();
        }
    }, [search]);

    const searchHandler = () => {
        //  let text = search.toLowerCase();

        let products = itemList.filter((item, index) => {
            return item?.productName?.toLowerCase().includes(search.toLowerCase());
        });
        setItemList(products);
    };

    const _renderProductLists = ({ item }) => {
        return <ProductLists {...item} />
    }
    // const renderHeader = () => {
    //     return (
    //         <Header heading={category}
    //             headerStyle={{ paddingVertical: 0, paddingTop: vs(15) }}
    //             onPress={() => navigation.goBack()}
    //             rightIcon={() => (
    //                 <Pressable onPress={() => navigation.navigate('Filter')}>
    //                     <Text style={{ fontSize: fs(24), color: colors.white, fontFamily: fonts.bold }}>Filter</Text>
    //                 </Pressable>
    //             )}
    //             searchBar={() => (
    //                 <View style={{
    //                     marginHorizontal: hs(15),
    //                     marginVertical: vs(15),
    //                     backgroundColor: colors.white,
    //                     borderRadius: 5
    //                 }}>
    //                     <View style={{ flexDirection: 'row', alignItems: 'center' }}>
    //                         <Image source={images.search}
    //                             style={{ marginHorizontal: hs(10), height: vs(20), width: hs(20), resizeMode: 'contain' }} />
    //                         <TextInput
    //                             placeholder='search for products'
    //                             placeholderTextColor={colors.black}
    //                             value={search}
    //                             onChangeText={setSearch}
    //                             style={{
    //                                 flex: 1,
    //                                 fontFamily: fonts.regular,
    //                                 fontSize: fs(18)
    //                             }} />
    //                     </View>
    //                 </View>
    //             )}
    //         />
    //     )
    // }

    // useLayoutEffect(() => {
    //     navigation.setOptions({
    //         header: () => {
    //             return renderHeader();
    //         }
    //     });
    // }, []);

    return (
        <View style={styles.container}>
            <View style={{ width: '100%', paddingTop: statusBarHeight, backgroundColor: colors.Primary_Blue }}>
                <View style={{
                    marginHorizontal: hs(15),
                    paddingTop: vs(15),
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable onPress={() => navigation.goBack()}>
                            <Image source={images.back_icon}
                                style={{ height: vs(20), width: hs(20), resizeMode: 'contain' }}
                            />
                        </Pressable>
                        <Text style={{
                            fontSize: fs(20),
                            color: colors.white,
                            fontFamily: fonts.bold,
                        }}>{category}</Text>
                    </View>

                    <Pressable onPress={() => navigation.navigate('Filter')}>
                        <Image source={images.filter}
                            style={{ height: vs(35), width: hs(35), resizeMode: 'contain' }}
                        />
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
                        <TextInput
                            placeholder='Search for milk products'
                            placeholderTextColor={colors.Gray_text}
                            value={search}
                            onChangeText={setSearch}
                            style={{ flex: 1 }}
                        />
                    </View>
                </View>
            </View>

            <View style={{ marginHorizontal: hs(10), marginTop: vs(15) }}>
                <FlatList
                    data={itemList}
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

export default Category;
