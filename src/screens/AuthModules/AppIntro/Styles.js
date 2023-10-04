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
        height: screenHeight * 0.60,
        resizeMode: 'stretch'
    },
    bottom_view: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 65,
        marginHorizontal: 15
    },
    into_title: {
        color: colors.black,
        fontFamily: fonts.bold,
        fontWeight: '700',
        fontSize: fs(22),
        textAlign: 'center',
        alignSelf: 'center'
    },
    lorem_text: {
        color: colors.black,
        fontSize: fs(14),
        textAlign: 'center',
        fontFamily: fonts.regular,
        marginTop: vs(15)
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
        bottom: vs(28),
        flexDirection: 'row',
    }

})

export default styles;