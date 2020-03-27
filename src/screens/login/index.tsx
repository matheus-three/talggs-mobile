import React from 'react';

import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import SvgUri from "expo-svg-uri";

import GradientButton from "react-native-gradient-buttons";

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

            <GradientButton
                textStyle={{ fontSize: 20, color: '#2D4F6C' }}
                gradientBegin="#F2A950"
                gradientEnd="#A7E4F2"
                height={60}
                width='80%'
                radius={50}
                impact
                impactStyle='Light'
                onPressAction={() => alert('You pressed me!')}
            >
                ACESSAR
            </GradientButton>

            <Text style={Style.text}>Ainda não possui uma conta? Cadastre-se!</Text>
        </View>
    )
}

export default Login;
