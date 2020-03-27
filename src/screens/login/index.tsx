import React from 'react';

import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import SvgUri from "expo-svg-uri";

import Style from './style';

const Login = () => {

    return (
        <View style={Style.container}>
            <SvgUri
                width="260"
                height="260"
                source={require('../../../assets/Logo1.svg')}
            />

            <TextInput placeholder="Usuário" style={Style.input} />
            <TextInput placeholder="Senha" secureTextEntry style={Style.input} />

            <TouchableOpacity style={Style.button}>
                <Text style={Style.buttonText}>ACESSAR</Text>
            </TouchableOpacity>

            <Text style={Style.text}>Ainda não possui uma conta? Cadastre-se!</Text>
        </View>
    )
}

export default Login;
