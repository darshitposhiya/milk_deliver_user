import React, { useLayoutEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { hs, vs, fs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import Btn from '../../../components/Btn';
import PendingOrderLists from '../../../components/ListViews/PendingOrderLists/PendingOrderLists';
import { completeorder_data, pendingorder_data } from '../../../assets/data/data';
import CompleteOrderLists from '../../../components/ListViews/CompleteOrderLists/CompleteOrderLists';

const MyOrders = () => {

    const navigation = useNavigation();
    const [isCompleted, setIsCompleted] = useState(true);

    const _renderPendingOrderLists = ({ item }) => {
        return <PendingOrderLists {...item} />
    }

    const _renderCompleteOrderLists = ({ item }) => {
        return <CompleteOrderLists {...item} />
    }
    const renderHeader = () => {
        return (
            <Header heading="My Orders" onPress={() => navigation.goBack()} />
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
            <View style={{ marginHorizontal: hs(15), marginTop: vs(20), flexDirection: 'row', alignItems: 'center' }}>
                <Btn onPress={() => setIsCompleted(true)}
                    title="Pending"
                    btnStyle={{
                        width: '50%', borderRadius: 0, borderTopLeftRadius: 5, borderBottomLeftRadius: 5,
                        backgroundColor: isCompleted == false ? colors.white : colors.Primary_Blue
                    }}
                    btnTextStyle={{ color: isCompleted == false ? colors.Primary_Blue : colors.white,fontSize: fs(18) }}
                />
                <Btn onPress={() => setIsCompleted(false)}
                    title="Completed"
                    btnStyle={{
                        width: '50%', borderRadius: 0, borderTopRightRadius: 5, borderBottomRightRadius: 5,
                        backgroundColor: isCompleted == true ? colors.white : colors.Primary_Blue
                    }}
                    btnTextStyle={{ color: isCompleted == true ? colors.Primary_Blue : colors.white,fontSize: fs(18) }}
                />
            </View>


            {isCompleted == true ?
                (
                    <View style={{ marginHorizontal: hs(15), }}>
                        <FlatList
                            data={pendingorder_data}
                            renderItem={_renderPendingOrderLists}
                            keyExtractor={(_, index) => index.toString()}
                        />
                    </View>
                )
                :
                ''
            }
            {
                isCompleted == false ?
                    (
                        <View style={{ marginTop: vs(10), marginHorizontal: hs(10) }}>
                            <FlatList
                                numColumns={2}
                                data={completeorder_data}
                                renderItem={_renderCompleteOrderLists}
                                keyExtractor={(_, index) => index.toString()}
                            />
                        </View>
                    )
                    :
                    ''
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default MyOrders;
