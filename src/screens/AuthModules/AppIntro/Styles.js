import { StyleSheet } from 'react-native';
import { colors } from '../../../assets/colors/colors';
import { fs, screenHeight, hs, vs } from '../../../utility/ResponsiveStyle';
import { fonts } from '../../../assets/fonts';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.white
    },
    introScreenImg: {
        width: "100%",
        height: screenHeight * 0.55,
        resizeMode: 'stretch'
    },
    bottom_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 60,
        marginHorizontal: 15
    },
    into_title: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontSize: fs(24),
        textAlign: 'center',
        alignSelf: 'center'
    },
    lorem_text: {
        color: colors.black,
        fontSize: fs(16),
        textAlign: 'center',
        fontFamily: fonts.regular
    },
    Appintro_BottomView: {
        width: '95%',
        alignSelf: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    Inline_dots: {
        position: 'absolute',
        bottom: vs(25),
        flexDirection: 'row',
    }

})

export default styles;