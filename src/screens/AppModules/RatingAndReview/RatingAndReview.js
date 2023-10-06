import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import { colors } from '../../../assets/colors/colors';
import { vs, hs, fs } from '../../../utility/ResponsiveStyle';
import TextInputContainer from '../../../components/TextInputContainer';
import Btn from '../../../components/Btn';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const RatingAndReview = () => {

    const navigation = useNavigation();
    const renderHeader = () => {
        return (
            <Header heading="Rating & Review" onPress={() => navigation.goBack()} />
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
            <KeyboardAwareScrollView showsVerticalScrollIndicator={false}>
            <View style={{ marginHorizontal: hs(15), marginTop: vs(20) }}>
                <View>
                    <Image source={images.useImage}
                        style={{ height: vs(70), width: hs(70), resizeMode: 'contain', alignSelf: 'center', zIndex: 100 }} />
                    <View style={{ backgroundColor: colors.white, borderTopLeftRadius: 15, borderTopRightRadius: 15, height: 35, position: 'absolute', bottom: 0, left: 0, right: 0 }} />
                </View>

                <View style={{ paddingTop: vs(10), paddingBottom: vs(15), paddingHorizontal: hs(15), backgroundColor: colors.white, alignItems: 'center', borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}>
                    <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700', textAlign: 'center' }}>Ricardo McDonald</Text>

                    <View style={{ flexDirection: 'row', marginTop: vs(10), alignItems: 'center' }}>
                        <Image source={images.yellowStar} style={{ height: vs(14), width: hs(14), resizeMode: 'contain', }} />
                        <Image source={images.yellowStar} style={{ height: vs(14), width: hs(14), resizeMode: 'contain', marginLeft: hs(5) }} />
                        <Image source={images.yellowStar} style={{ height: vs(14), width: hs(14), resizeMode: 'contain', marginLeft: hs(5) }} />
                        <Image source={images.yellowStar} style={{ height: vs(14), width: hs(14), resizeMode: 'contain', marginLeft: hs(5) }} />
                        <Image source={images.whiteStar} style={{ height: vs(14), width: hs(14), resizeMode: 'contain', marginLeft: hs(5) }} />
                    </View>

                    <Text style={{ marginTop: vs(10), fontSize: fs(18), color: colors.black, fontFamily: fonts.bold, fontWeight: '700', textAlign: 'center' }}>How was your experience?</Text>

                    <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.Gray_text, fontFamily: fonts.regular, textAlign: 'center' }}>Your feedback will help improve your experience</Text>

                    <TextInputContainer placeholder="Comments..."
                        containerStyle={{ marginTop: vs(10), height: vs(100), alignItems: 'flex-start' }}
                    />

                    <Btn onPress={() => navigation.goBack()}
                        title="Submit Review"
                        btnStyle={{ marginTop: vs(20) }}
                    />
                </View>
            </View>
            </KeyboardAwareScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default RatingAndReview;
