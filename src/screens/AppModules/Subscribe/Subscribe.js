import React, { useLayoutEffect, useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, Pressable, ScrollView, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../../components/Header';
import { colors } from '../../../assets/colors/colors';
import { vs, hs, fs, screenWidth, screenHeight } from '../../../utility/ResponsiveStyle';
import { images } from '../../../assets/images';
import { fonts } from '../../../assets/fonts';
import Btn from '../../../components/Btn';
import AuthFooter from '../../../components/AuthFooter';
import CalendarPicker from 'react-native-calendar-picker';
import Modal from 'react-native-modal'

const Subscribe = () => {

    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const [selectedDate, setSelectedDate] = useState(null);
    const [pickSchedule, setPickSchedule] = useState('');
    const calendarRef = useRef();

    const shownDate = new Date().toDateString();
    const dateString = selectedDate;
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString(date, options);

    
    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const handleDateChange = (date) => {
        setSelectedDate(date);

    };

    const openCalendar = () => {
        calendarRef.current
        toggleModal();
    };

    const renderHeader = () => {
        return (
            <Header heading="Subscribe" onPress={() => navigation.goBack()} />
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
            <ScrollView style={{ marginBottom: vs(80), }}>
                <View style={{ marginHorizontal: hs(15), paddingVertical: vs(10), paddingHorizontal: hs(10), backgroundColor: colors.white, marginTop: vs(20), flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',borderRadius:5 }}>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Image source={images.productSubscribe}
                            style={{ height: vs(70), width: hs(60), resizeMode: 'contain', }} />
                        <View>
                            <Text style={{ fontSize: fs(16), color: colors.black, fontFamily: fonts.bold }}>Amul cool milk</Text>
                            <Text style={{ marginTop: vs(5), fontSize: fs(16), color: colors.Light_Blue, fontFamily: fonts.bold, }}>$25.00</Text>
                        </View>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: colors.Gray_Border, borderRadius: 5, padding: 5 }}>
                        <Pressable>
                            <Image source={images.minus}
                                style={{ height: vs(10), width: hs(10), resizeMode: 'contain' }} />
                        </Pressable>
                        <Text style={{ marginHorizontal: hs(10), fontSize: fs(16), color: colors.black, fontFamily: fonts.regular }}>1</Text>
                        <Pressable>
                            <Image source={images.plus}
                                style={{ height: vs(10), width: hs(10), resizeMode: 'contain' }} />
                        </Pressable>
                    </View>
                </View>

                <View style={{ marginHorizontal: hs(15), marginTop: vs(15) }}>
                    <Text style={{ fontSize: fs(18), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Pick Schedule</Text>
                </View>

                <View style={{ marginHorizontal: hs(15), paddingVertical: vs(10), backgroundColor: colors.white, marginTop: vs(15),borderRadius:5 }}>
                    <View style={{ paddingHorizontal: hs(10), flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>

                        <Pressable onPress={() => { setPickSchedule('Daily'), openCalendar() }}
                            style={[
                                styles.pickScheduleBtn,
                                { borderColor: pickSchedule == 'Daily' ? colors.Green : colors.Gray_Border },
                                { backgroundColor: pickSchedule == 'Daily' ? colors.Green : colors.white }
                            ]} >
                            <Text style={[
                                { fontSize: fs(14), fontFamily: fonts.regular },
                                { color: pickSchedule == 'Daily' ? colors.white : colors.black },]}>Daily</Text>
                        </Pressable>

                        <Pressable onPress={() => { setPickSchedule('Alternate day'), openCalendar() }}
                            style={[
                                styles.pickScheduleBtn,
                                { borderColor: pickSchedule == 'Alternate day' ? colors.Green : colors.Gray_Border },
                                { backgroundColor: pickSchedule == 'Alternate day' ? colors.Green : colors.white }
                            ]} >
                            <Text style={[
                                { fontSize: fs(14), fontFamily: fonts.regular },
                                { color: pickSchedule == 'Alternate Day' ? colors.white : colors.black },]}>Alternate day</Text>
                        </Pressable>

                        <Pressable onPress={() => { setPickSchedule('Every 3 day'), openCalendar() }}
                            style={[
                                styles.pickScheduleBtn,
                                { borderColor: pickSchedule == 'Every 3 day' ? colors.Green : colors.Gray_Border },
                                { backgroundColor: pickSchedule == 'Every 3 day' ? colors.Green : colors.white }
                            ]} >
                            <Text style={[
                                { fontSize: fs(14), fontFamily: fonts.regular },
                                { color: pickSchedule == 'Every 3 day' ? colors.white : colors.black },]}>Every 3 day</Text>
                        </Pressable>

                        <Pressable onPress={() => { setPickSchedule('Weekly'), openCalendar() }}
                            style={[
                                styles.pickScheduleBtn,
                                { borderColor: pickSchedule == 'Weekly' ? colors.Green : colors.Gray_Border },
                                { backgroundColor: pickSchedule == 'Weekly' ? colors.Green : colors.white }
                            ]} >
                            <Text style={[
                                { fontSize: fs(14), fontFamily: fonts.regular },
                                { color: pickSchedule == 'Weekly' ? colors.white : colors.black },]}>Weekly</Text>
                        </Pressable>

                        <Pressable onPress={() => { setPickSchedule('Monthly'), openCalendar() }}
                            style={[
                                styles.pickScheduleBtn,
                                { borderColor: pickSchedule == 'Monthly' ? colors.Green : colors.Gray_Border },
                                { backgroundColor: pickSchedule == 'Monthly' ? colors.Green : colors.white }
                            ]} >
                            <Text style={[
                                { fontSize: fs(14), fontFamily: fonts.regular },
                                { color: pickSchedule == 'Monthly' ? colors.white : colors.black },]}>Monthly</Text>
                        </Pressable>

                    </View>

                    {!selectedDate == '' ?
                        (
                            <>
                                <View style={{ marginTop: vs(10), borderWidth: 1, borderColor: colors.Gray_Border, opacity: 0.5 }} />

                                <View style={{ marginTop: vs(10), paddingHorizontal: hs(10), flexDirection: 'row', justifyContent: 'space-between' }}>
                                    <View >
                                        <Text style={{ fontSize: fs(14), color: colors.Gray_text, fontFamily: fonts.regular }}>Subscription Start Date</Text>
                                        <Text style={{ marginTop: vs(5), fontSize: fs(16), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>{formattedDate}</Text>
                                    </View>
                                    <Image source={images.calender}
                                        style={{ height: vs(25), width: hs(25), resizeMode: 'contain', }} />
                                </View>
                            </>
                        )
                        :
                        ''
                    }
                </View>

                <View style={{ marginHorizontal: hs(15), marginTop: vs(15) }}>
                    <Text style={{ fontSize: fs(18), color: colors.black, fontFamily: fonts.bold, fontWeight: '700' }}>Delivery Address</Text>
                </View>

                <View style={{
                    marginHorizontal: hs(15), marginTop: vs(15), paddingVertical: vs(10), paddingHorizontal: hs(10), backgroundColor: colors.white,
                    flexDirection: 'row', justifyContent: 'space-between',borderRadius:5
                }}>
                    <Text style={{ flex: 1, fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>490 Lauren Drive, Madison, Wisconsin, United States.</Text>
                    <Pressable onPress={() => navigation.navigate('Address')}>
                        <Image source={images.editAddress}
                            style={{ height: vs(20), width: hs(20), resizeMode: 'contain', marginLeft: hs(20) }} />
                    </Pressable>
                </View>
            </ScrollView>

            <AuthFooter>
                <View style={{ marginHorizontal: 15, flexDirection: 'row', alignItems: 'center', }}>
                    <Btn onPress={() => navigation.navigate('PaymentMethod')}
                        title="Start Subscription"
                        btnStyle={{ width: '100%' }}
                    />
                </View>
            </AuthFooter>

            <View>
                <Modal isVisible={isModalVisible} onBackdropPress={toggleModal} style={styles.modal}>
                    <View style={{ backgroundColor: 'white', borderRadius: 0 }}>
                        <View style={{ padding: 10, backgroundColor: colors.Primary_Blue }}>
                            <Text style={styles.modalTitle}>{shownDate}</Text>
                        </View>
                        <View style={styles.modalContent}>
                            <CalendarPicker
                                onDateChange={handleDateChange}
                                width={screenWidth * 0.80}
                                height={screenHeight * 0.60}
                                ref={calendarRef}

                            />
                            <View style={{ marginTop: 20, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-end' }}>
                                <Pressable onPress={() => { setModalVisible(!isModalVisible), setSelectedDate(null), setPickSchedule('') }}>
                                    <Text style={{ fontSize: 16, color: colors.Light_Blue, marginHorizontal: 10 }}>cancel</Text>
                                </Pressable>

                                <Pressable onPress={toggleModal}>
                                    <Text style={{ fontSize: 16, color: colors.Light_Blue, marginHorizontal: 10 }}>ok</Text>
                                </Pressable>
                            </View>

                        </View>
                    </View>
                </Modal>

            </View>
        </View >

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    pickScheduleBtn: {
        width: 'auto',
        height: 'auto',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        margin: 5,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.Gray_Border,
    },
    title: {
        fontSize: 20,
        marginBottom: 20,
    },
    selectedDate: {
        fontSize: 16,
        marginTop: 20,
        backgroundColor: colors.Primary_Blue
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
    },
    modalTitle: {
        fontSize: 20,
        color: 'white',
        fontWeight:'700',
        fontFamily: fonts.bold,
        paddingVertical:10
        
    },
    modelButton: {
        backgroundColor: colors.Primary_Blue
    },


});

export default Subscribe;
