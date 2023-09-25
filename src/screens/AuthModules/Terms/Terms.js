import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../../../components/Header';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../../../assets/colors/colors';
import { fs, hs ,vs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';

const Terms = () => {

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
           <View style={{marginHorizontal:hs(15)}}>
               <Text style={{fontSize:fs(26),marginTop:vs(20),fontFamily:fonts.bold,fontWeight:'700',color:colors.black}}>Terms and conditions</Text>
           </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:colors.white
    },
});

export default Terms;
