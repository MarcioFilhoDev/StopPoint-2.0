import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

import { useNavigation } from '@react-navigation/native'

export default function Login() {
    const navegar = useNavigation()

    const [email, setEmail] = useState('@hotmail.com')
    const [status, setStatus] = useState('')

    // function verificaEmail() {
    //     if (email.length == 0) {
    //         setStatus('Insira um e-mail')
    //         return false
    //     }

    //     if (email.includes("@hotmail.com") || email.includes("@gmail.com") || email.includes("@yahoo.com")) {
    //         setStatus(''); // Limpa o status
    //         return true; // E-mail é válido
    //     }

    //     setStatus('Email inválido'); // Define o status como inválido
    //     return false; // E-mail não é válido
    // }


    // function login() {
    //     if (verificaEmail()) {
    //         navegar.navigate('Procurar')
    //         setEmail('')
    //     }

    // }

    return (
        <View style={st.container}>
            <Image
                source={require('../Images/stopoint-logo.png')}
                resizeMode='contain'
                style={st.logo} />

            <View style={st.formLogin}>
                <View style={st.formViews}>
                    <Text style={st.titleInput}>E-mail</Text>
                    <TextInput placeholder='exemplo@exemplo.com' style={st.input} value={email} onChangeText={(textoDigitado) => setEmail(textoDigitado)} />
                    <Text style={{ color: '#ef4444', fontSize: 13 }}>{status}</Text>
                </View>

                <View style={st.formViews}>
                    <Text style={st.titleInput}>Passowrd</Text>
                    <TextInput placeholder='************' style={st.input} />

                    <TouchableOpacity style={{ width: '40%' }}>
                        <Text style={st.resetPassword}>Esqueceu sua senha?</Text>
                    </TouchableOpacity>
                </View>

                {/* <TouchableOpacity style={st.loginBtn} onPress={login}> */}
                <TouchableOpacity style={st.loginBtn} onPress={ () => navegar.navigate("DrawerRoutes")}>
                    <Text style={st.loginText}>Acessar</Text>
                </TouchableOpacity>

                <Text style={{ color: '#efefef', textAlign: 'center' }}>Ou, entre com outras plataformas</Text>

                <View style={st.anotherApps}>
                    <TouchableOpacity style={st.googleBtn}>
                        <Text style={st.textApps}>Google</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={st.facebookBtn}>
                        <Text style={st.textApps}>Facebook</Text>
                    </TouchableOpacity>
                </View>

                <Text style={{ color: '#efefef', textAlign: 'center' }}>Não possui uma conta?</Text>

                <TouchableOpacity style={st.cadastrarBtn} onPress={() => navegar.navigate("Cadastro")}>
                    <Text style={st.loginText}>Cadastre-se</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const st = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#121212',
    },
    logo: {
        height: 150,
        width: '100%',
        marginBottom: '10%'
    },
    formLogin: {
        width: '80%',
        gap: '3%'
    },
    formViews: {
        gap: 5
    },
    titleInput: {
        color: '#efefef',
        fontSize: 18, fontWeight: 'bold',
        letterSpacing: 1.2,
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingLeft: 10,
    },
    loginBtn: {
        backgroundColor: '#a3e635',
        padding: 10,
        borderRadius: 10,
        marginTop: 10
    },
    resetPassword: {
        color: '#efefef',
        fontSize: 10,
        marginLeft: 10,
        textDecorationLine: 'underline',
    },
    loginText: {
        color: '#121212', textAlign: 'center',
        fontSize: 18, fontWeight: 'bold'
    },
    googleBtn: {
        backgroundColor: '#FE0135',
        width: '46%',
        padding: 6,
        borderRadius: 4,
    },
    facebookBtn: {
        backgroundColor: '#414BB2',
        width: '46%',
        padding: 6,
        borderRadius: 4
    },
    anotherApps: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textApps: { color: '#fff', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
    cadastrarBtn: {
        backgroundColor: '#facc15',
        padding: 6,
        borderRadius: 8
    }
})