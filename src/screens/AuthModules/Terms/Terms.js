import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../assets/colors/colors';
import { fs, hs, vs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';

const Terms = () => {

  const Lorem = 'Lorem Ipsum is simply dummy text printing and typesetting industry.';
  const navigation = useNavigation();
  const renderHeader = () => {
    return (
      <Header heading="Terms and conditions" onPress={() => navigation.goBack()} />
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
      <ScrollView style={{marginBottom:vs(20)}} showsVerticalScrollIndicator={false}>
        <View style={{ marginHorizontal: hs(15) }}>
          <Text style={{ fontSize: fs(22), marginTop: vs(20), fontFamily: fonts.bold, fontWeight: '700', color: colors.black }}>Terms and conditions</Text>

          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Lorem Ipsum is simply dummy text printing.</Text>

          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>1. {Lorem}</Text>
          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>2. {Lorem}</Text>
          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>3. {Lorem}</Text>
          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>4. {Lorem}</Text>
          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>5. {Lorem}</Text>
          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>6. {Lorem}</Text>
          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>7. {Lorem}</Text>
          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>8. {Lorem}</Text>
          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>Lorem Ipsum is simply dummy text printing.</Text>
          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>1. {Lorem}</Text>
          <Text style={{ marginTop: vs(10), fontSize: fs(14), color: colors.black, fontFamily: fonts.regular }}>2. {Lorem}</Text>
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

export default Terms;
