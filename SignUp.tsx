import React, { useState } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'
import Button from './Button'
import TextInput from './TextInput'

type Props = {}

const colors = {
    background: '#e3e3e3',
    dodgerBlue: 'rgb(58, 139, 255)',
    dusk: 'rgb(65, 77, 107)',
    cloudyBlue: 'rgb(175, 194, 219)',
    blueGray: 'rgb(134, 154, 183)',
    paleGray: 'rgb(233, 237, 244)'
}

const Signup = (props: Props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [statusMsg, setStatusMsg] = useState('')
    const [isRegistering, setIsRegistering] = useState(false)

    const onTextChanged = (type, text) => {
        switch (type) {
            case 'EMAIL':
                setEmail(text)
                break
            case 'PASSWORD':
                setPassword(text)
                break
            case 'NAME':
                setName(text)
                break
            case 'STATUS_MSG':
                setStatusMsg(text)
                break
        }
    }
    return (
        <View style={styles.container}>
            <View style={styles.wrapper}>
                <TextInput
                    style={{ marginTop: 8 }}
                    txtLabel='EMAIL'
                    txtHint='Please write email.'
                    txt={email}
                    onChangeText={(text) => { onTextChanged('EMAIL', text) }}
                />
                <TextInput
                    style={{ marginTop: 24 }}
                    txtLabel='PASSWORD'
                    txtHint='Please write password.'
                    txt={password}
                    onChangeText={(text) => { onTextChanged('PASSWORD', text) }}
                    isPassword
                />
                <TextInput
                    style={{ marginTop: 24 }}
                    txtLabel='NAME'
                    txtHint='Please write name.'
                    txt={name}
                    onChangeText={(text) => { onTextChanged('EMAIL', text) }}
                />
                <TextInput
                    style={{ marginTop: 24 }}
                    txtLabel='STATUS MESSAGE'
                    txtHint='Please write status message.'
                    txt={statusMsg}
                    onChangeText={(text) => { onTextChanged('STATUS_MSG', text) }}
                />
                <View style={styles.btnWrapper}>
                    <Button
                        isLoading={isRegistering}
                        onPress={() => {
                            setIsRegistering(true)
                            setTimeout(() => {
                                setIsRegistering(false)
                            }, 3000)
                        }}
                        style={styles.btnRegister}
                        textStyle={styles.txtRegister}
                    >
                        Register
                </Button>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',

        flexWrap: 'nowrap'
    },
    wrapper: {
        marginTop: 40,
        width: '78%',

        flexDirection: 'column',
        alignItems: 'center'
    },
    btnWrapper: {
        width: '100%',
        flexDirection: 'column',
        alignItems: 'flex-end',
    },
    btnRegister: {
        backgroundColor: colors.dodgerBlue,
        borderColor: colors.dodgerBlue,
        borderRadius: 4,
        borderWidth: 1,
        width: 136,
        height: 60,
        marginLeft: 4,
        marginTop: 24,
        marginBottom: 48,
        shadowColor: colors.blueGray,
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 4,
        shadowOpacity: 0.3,

        alignItems: 'center',
        justifyContent: 'center'
    },
    txtRegister: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white'
    }
})

Signup.defaultProps = {

}

export default Signup