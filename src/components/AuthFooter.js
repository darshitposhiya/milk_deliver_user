import React from 'react';
import useKeyboard from '../hooks/useKeybord';
import { View } from 'react-native'

const AuthFooter = ({
    children
}) => {
    const { isKeyboardVisible } = useKeyboard();

    if (isKeyboardVisible) {
        return null
    }
    return (
        <View
            style={{
                position: 'absolute',
                bottom: -10,
                width: '100%',
                justifyContent: 'center',
                // display: isKeyboardVisible ? 'none' : 'flex'
                height: 130
            }}
        >
            <View style={{
                position: 'absolute',
                alignSelf: 'center',
                flexDirection: 'row',
                // alignItems: 'center',
                justifyContent: 'center',
                bottom: 20,
            }}
            >
                {children}
            </View>
        </View>
    )
}

export default AuthFooter;