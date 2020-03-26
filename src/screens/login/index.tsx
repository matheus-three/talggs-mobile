import React from 'react';

import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';

import Style from './style';

const Login = () => {

    return (
        <View style={Style.container}>
            <TextInput placeholder="Usuário" style={Style.input} />
            <TextInput placeholder="Senha" secureTextEntry style={Style.input} />

            <TouchableOpacity style={Style.button}>
                <Text style={Style.buttonText}>ACESSAR</Text>
            </TouchableOpacity>

            <Text style={Style.text}>Ainda não possui uma conta? Cadastre-se!!</Text>
        </View>
    )
}

export default Login;
