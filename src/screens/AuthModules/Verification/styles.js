import { StyleSheet } from "react-native";
import { vs,hs,fs } from "../../../utility/ResponsiveStyle";
import { colors } from "../../../assets/colors/colors";

const styles = StyleSheet.create({
    root: {
        paddingHorizontal: 40
    },
    codeFieldRoot: {
        marginTop: vs(20)
    },
    cell: {
        width: hs(30),
        height: vs(45),
        // lineHeight: vs(40),
        fontSize: fs(24),
        borderBottomWidth: 1,
        borderColor: colors.Gray_Border,
        textAlignVertical: 'center',
        textAlign: 'center',
        backgroundColor: colors.white,
        color:colors.Light_Blue
    },
    focusCell: {
        borderColor: colors.Light_Blue,
        color: colors.Light_Blue,
    },
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
})

export default styles;