import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View, TextInput } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

type Props = {
    style: Object,
    labelStyle?: Object,
    labelFocus?: Object,
    inputStyle?: Object,
    colors: Object,
    multiline: boolean,
    txt: string,
    txtHint: string,
    placeholderTextColor: string,
    isPassword: boolean,
    onChangeText: (text: string) => void
}

const Shared = (props: Props) => {
    const [focused, setFocused] = useState(false)
    return (
        <View style={[styles.wrapper, props.style]}>
            {
                !!props.txt
                    ? <Text style={focused ? props.labelFocus : props.labelStyle}>
                        {props.txt}
                    </Text>
                    : <View/>
            }
            <TextInput
                style={[
                    focused ? styles.inputFocus : styles.input,
                    props.inputStyle,
                ]}
                multiline={props.multiline}
                onChangeText={props.onChangeText}
                value={props.txt}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                placeholder={props.txtHint}
                placeholderTextColor={props.placeholderTextColor}
                secureTextEntry={props.isPassword}
            ></TextInput>
        </View>
    )
}

const colors = {
    background: '#e3e3e3',
    dodgerBlue: 'rgb(58, 139, 255)',
    dusk: 'rgb(65, 77, 107)',
    cloudyBlue: 'rgb(175, 194, 219)',
    blueGray: 'rgb(134, 154, 183)',
    paleGray: 'rgb(233, 237, 244)'
}

const styles = StyleSheet.create({
    // container: {
    //     flex: 1,
    //     flexDirection: 'row',
    //     justifyContent: 'flex-start',
    //     alignItems: 'baseline',
    //     flesWrap: 'nowrap'
    // },
    wrapper: {
        alignSelf: 'stretch',

        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'flex-start'
    },
    label: {
        color: colors.blueGray,
        marginBottom: 0,
        fontSize: 12
    },
    labelFocus: {
        color: colors.dodgerBlue,
        marginBottom: 8,
        fontSize: 12
    },
    input: {
        alignSelf: 'stretch',
        color: colors.dust,
        fontSize: 16,
        paddingVertical: 22,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: 'rgb(233, 237, 244)',

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    inputFocus: {
        alignSelf: 'stretch',
        color: colors.dusk,
        fontSize: 16,
        paddingVertical: 22,
        paddingHorizontal: 20,
        borderWidth: 1,
        borderColor: colors.dodgerBlue,

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start'
    }
})

Shared.defaultProps = {
    style: styles.wrapper,
    labelStyle: styles.label,
    labelStyleFocus: styles.labelFocus,
    multiline: false,
    isPassword: false
}

export default Shared