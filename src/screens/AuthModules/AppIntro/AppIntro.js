import React, { useState, useRef } from 'react';
import { View, Image } from 'react-native';
import PagerView from 'react-native-pager-view';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import { colors } from '../../../assets/colors/colors';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import Btn from '../../../components/Btn';
import styles from './Styles';
import Intro1 from './Intro1';
import Intro2 from './Intro2';
import Intro3 from './Intro3';
import { useNavigation } from '@react-navigation/native'
import { getStatusBarHeight } from '../../../utility/Globals';

const AppIntro = () => {

    const statusBarHeight = getStatusBarHeight();
    const height = statusBarHeight + 10;
    const navigation = useNavigation();
    const [pagePosition, setPagePosition] = useState(0);
    const ref = useRef(null);
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <PagerView style={{ flex: 1, marginTop: height, marginHorizontal: 15 }}
                initialPage={pagePosition}
                ref={ref}
                onPageSelected={(e) => {
                    setPagePosition(e.nativeEvent.position)
                }} >

                <View key="1">
                    <Intro1 />
                </View>
                <View key="2">
                    <Intro2 />
                </View>
                <View key="3">
                    <Intro3 />
                </View>
            </PagerView>

            <View style={styles.Appintro_BottomView}>
                {pagePosition == 2 ? null
                    :
                    (
                        <View style={styles.Inline_dots}>
                            <View style={{
                                borderWidth: fs(1),
                                height: vs(10),
                                width: hs(10),
                                borderRadius: 20,
                                borderColor: pagePosition == 0 ? colors.Light_Blue : "#b2b2b2",
                                backgroundColor: pagePosition == 0 ? colors.Light_Blue : "white"
                            }} />

                            <View style={{
                                borderWidth: fs(1),
                                height: vs(10),
                                width: hs(10),
                                borderRadius: 20,
                                marginLeft: hs(5),
                                borderColor: pagePosition == 1 ? colors.Light_Blue : "#b2b2b2",
                                backgroundColor: pagePosition == 1 ? colors.Light_Blue : "white"
                            }} />

                            <View style={{
                                borderWidth: fs(1),
                                height: vs(10),
                                width: hs(10),
                                borderRadius: 20,
                                marginLeft: hs(5),
                                borderColor: pagePosition == 2 ? colors.Light_Blue : "#b2b2b2",
                                backgroundColor: pagePosition == 2 ? colors.Light_Blue : "white"
                            }} />
                        </View>
                    )
                }

                <Btn title={pagePosition == 2 ? "Let's go" : 'Skip'}
                    onPress={() => {
                        if (pagePosition == 2) {
                            navigation.navigate('LoginOption')
                        } else {
                            ref.current?.setPage(pagePosition + 1)
                        }
                    }}
                    btnStyle={{
                        backgroundColor: colors.Primary_Blue,
                        height: 55,
                        borderRadius: 50,
                        justifyContent: 'center',
                        width: pagePosition == 2 ? '100%' : '33%',
                        right: 0,
                        position: 'absolute',
                        bottom: vs(10)
                    }}
                    btnTextStyle={{ fontSize: fs(20), fontfamily: fonts.bold, color: 'white' }}
                />
            </View>
        </View>
    );
};


export default AppIntro;
