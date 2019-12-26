import React from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

type Props = {}

const Login = (props: Props) => {
    return (
        <View style={styles.container}>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 50,
        flex: 1,
        flexDirection: 'row',
        // primary axis
        justifyContent: 'flex-start',
        // secondaty axis
        alignItems: 'baseline',

        flexWrap: 'nowrap'
    }
})

export default Login