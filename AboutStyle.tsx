import React, { Component } from 'react'
import {Platform, StyleSheet, Text, View, Image} from 'react-native'

type Props = {}

const AboutStyle = (props: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.view}/>
            <Text style={styles.text}>Hello</Text>
            <Image style={styles.img} source={require('./assets/react.png')}/>
            {/* require는 무조건 풀로 다 써야함. + icon + '.png' 같은 걸로 쓰면 안됨. */}
        </View>
    )
} 

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#F5FCFF',
        backgroundColor: 'yellow',

        flexWrap: 'nowrap',
    },
    view: {
        height: 200,
        width: 200,
        backgroundColor: 'red',
        borderBottomColor: 'green',
        borderWidth: 3
    },
    text: {
        height: 200,
        width: 200,
        backgroundColor: 'blue',
        fontSize: 30,
        color: 'white',
        textAlign: 'center'
    },
    img: {
        height: 200,
        width: 200,
    }
})

export default AboutStyle
