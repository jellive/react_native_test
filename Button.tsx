import React from 'react'
import { Platform, StyleSheet, Text, View, ActivityIndicator, TouchableOpacity, Image } from 'react-native'

type Props = {
    isDisabled: boolean,
    isLoading: boolean,
    style: Object,
    containerStyle: Object,
    disabledStyle: Object,
    textStyle: Object,
    children: string,
    indicatorColor: string,
    onPress: () => void,
    imgLeftStyle: Object,
    imgLeftSrc: any,
}

const Button = (props: Props) => {
        if (props.isDisabled) {
            return (
                <View style={props.containerStyle}>
                    <View style={props.disabledStyle}>
                        <Text style={props.textStyle}>
                            {props.children}
                        </Text>
                    </View>
                </View>
            )
        }
        if (props.isLoading) {
            return (
                <View style={props.containerStyle}>
                    <View style={props.style}>
                        <ActivityIndicator size="small" color={props.indicatorColor}/>
                    </View>
                </View>
            )
        }
        return (
            <View style={props.containerStyle}>
                <TouchableOpacity
                    onPress={props.onPress}
                >
                    <View style={props.style}>
                        {
                            props.imgLeftStyle
                            ? <Image
                            style={props.imgLeftStyle}
                            source={props.imgLeftSrc}
                            /> : <View/>
                        }
                        <Text style={props.textStyle}>
                            {props.children}
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    btn: {
        backgroundColor: 'transparent',
        alignSelf: 'center',
        borderRadius: 4,
        borderWidth: 2,
        width: '100%',
        height: '100%',
        borderColor: 'white',

        alignItems: 'center',
        justifyContent: 'center'
    },
    btnDisabled: {
        backgroundColor: 'rgb(243, 243, 243)',
        alignSelf: 'center',
        borderRadius: 4,
        borderWidth: 2,
        width: '100%',
        height: '100%',
        borderColor: '#333',

        alignItems: 'center',
        justifyContent: 'center',
    },
    txt: {
        fontSize: 14,
        color: 'white'
    },
    imgLeft: {
        width: 24,
        height: 24,
        position: 'absolute',
        left: 16
    }
})

Button.defaultProps = {
    containerStyle: styles.container,
    isLoading: false,
    isDisabled: false,
    style: styles.btn,
    textStyle: styles.txt,
    imgLeftStyle: styles.imgLeft,
    indicatorColor: 'white',
}

export default Button