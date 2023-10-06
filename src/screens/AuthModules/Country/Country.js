import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import CountryArry from '../../../CountryArray.json';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../assets/colors/colors';
import { vs, screenWidth } from '../../../utility/ResponsiveStyle';
import InputBox from '../../../components/InputBox';
import { useDispatch } from 'react-redux';
import CountryLists from '../../../components/ListViews/CountryLists/CountryLists';
//import { setCountryFlag } from '../../../featurers/authSlice';

const Country = ({ route }) => {

    const navigation = useNavigation();
    const dispatch = useDispatch();
    const [search, setSearch] = useState('');
    const [searchedCountry, setSearchedCountry] = useState([]);

    useEffect(() => { setSearchedCountry(CountryArry) }, []);


    useEffect(() => {
        if (search) {
            searchHandler();
        }
    }, [search]);

    const searchHandler = () => {
        let text = search.toLowerCase();
        let country = CountryArry.filter((item, index) => {
            return item.name.includes(search) || item.name.toLowerCase().includes(text);
        });
        setSearchedCountry(country);
    };


    const _renderCountry = ({ item, index }) => {
        return <CountryLists
            {...item}
            goToCountry={() => {
                //dispatch(setCountryFlag(item.flag));
                navigation.navigate({
                    name: route?.params?.fromSignup == true ? 'CreateAccount' : null,
                    params: { country_flag: item.flag, phone_code: item.dial_code, country_name: item.name, countryCode: item.dial_code, navigate: route?.params?.fromSendMoney == true },
                    merge: true
                });
            }}
        />;
    };


    const renderHeader = () => {
        return (
            <View style=
                {{
                    height: 90,
                    flexDirection: 'row',
                    alignItems: 'flex-end',
                    paddingHorizontal: 10,
                    paddingBottom: 10
                }}>

                <Ionicons
                    name="close-circle-outline"
                    size={30}
                    color='grey'
                    onPress={() => { navigation.goBack() }}
                />
                <InputBox
                    placeHolder="search with country code etc..."
                    value={search}
                    onChangeText={setSearch}
                    placeholderTextColor={'#000'}
                    containerStyle={{
                        borderWidth: 0,
                        borderBottomWidth: 1,
                        width: screenWidth * 0.80
                    }}
                    inputStyle={{ color: colors.black }}
                    mpContainer={{ mh: 10, mt: -10 }} />
            </View>
        )
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            {renderHeader()}
            <FlatList
                data={searchedCountry}
                renderItem={_renderCountry}
                initialNumToRender={15}
                removeClippedSubviews={true}
                keyExtractor={(_, index) => index.toString()}
                getItemLayout={(data, index) => (
                    { length: 50, offset: 50 * index, index }
                )}
            />
        </View>
    );
};

export default Country;
