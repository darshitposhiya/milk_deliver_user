import React, { useState } from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { images } from '../../../assets/images';
import { colors } from '../../../assets/colors/colors';
import { fonts } from '../../../assets/fonts';
import { vs, hs, fs, screenWidth } from '../../../utility/ResponsiveStyle';
import { useNavigation } from '@react-navigation/native';
import Btn from '../../Btn';
import Modal from 'react-native-modal';
import TextInputContainer from '../../TextInputContainer';

const CompleteOrderLists = (
    {
        id,
        productName,
        productImage,
        productPrice,
        quantity
    }
) => {

    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    return (
        <View style={{ flex: 1 }}>
            <View key={id}
                style={{ height: 'auto', width: screenWidth * 0.44, borderRadius: 5, margin: 5, backgroundColor: colors.white }}>

                <View style={{ alignItems: 'center', justifyContent: 'center', }}>
                    <Image source={productImage}
                        style={{
                            height: vs(100),
                            width: hs(100),
                            resizeMode: 'contain',
                        }}
                    />
                </View>
                <View style={{ paddingHorizontal: hs(10), }}>
                    <Text style={{ fontSize: fs(14), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>{productName}</Text>
                    <Text style={{ marginTop: vs(5), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>{productPrice}</Text>

                    <Pressable onPress={() => setModalVisible(true)}
                        style={{ flexDirection: 'row', marginTop: vs(5), alignItems: 'center' }}>
                        <Image source={images.yellowStar} style={{ height: vs(14), width: hs(14), resizeMode: 'contain', }} />
                        <Image source={images.yellowStar} style={{ height: vs(14), width: hs(14), resizeMode: 'contain', marginLeft: hs(5) }} />
                        <Image source={images.yellowStar} style={{ height: vs(14), width: hs(14), resizeMode: 'contain', marginLeft: hs(5) }} />
                        <Image source={images.yellowStar} style={{ height: vs(14), width: hs(14), resizeMode: 'contain', marginLeft: hs(5) }} />
                        <Image source={images.whiteStar} style={{ height: vs(14), width: hs(14), resizeMode: 'contain', marginLeft: hs(5) }} />
                    </Pressable>
                    
                    <Btn onPress={() => navigation.navigate('BuyAgain')}
                        title="Buy again"
                        btnStyle={{ height: vs(30), marginTop: vs(10), marginBottom: vs(5) }}
                        btnTextStyle={{ fontSize: fs(14) }}
                    />
                </View>
            </View>

            {/* ---------modal---------------------------------- */}

            <Modal isVisible={isModalVisible} >
                <View>
                    <Image source={images.useImage}
                        style={{ height: vs(70), width: hs(70), resizeMode: 'contain', alignSelf: 'center', zIndex: 100 }} />
                    <View style={{ backgroundColor: colors.white, borderTopLeftRadius: 15, borderTopRightRadius: 15, height: 35, position: 'absolute', bottom: 0, left: 0, right: 0 }} />
                </View>

                <View style={{ paddingTop: vs(10), paddingBottom: vs(15), paddingHorizontal: hs(15), backgroundColor: colors.white, alignItems: 'center' }}>
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

                    <Btn onPress={() => setModalVisible(false)}
                        title="Submit Review"
                        btnStyle={{ marginTop: vs(20) }}
                    />
                </View>
            </Modal>
            {/* ------Close----modal---------------------------------- */}

        </View>

    );
};


export default CompleteOrderLists;
