import React, { useState } from 'react';

import { View, TextInput, Text, TouchableOpacity } from 'react-native';

import Style from './style';

// import { Logo1 } from '../../assets/icons'

const Login = () => {

    const teste = () => {
        alert("TESTE")
    }


    return (
        <View>
            <View style={Style.container}>
                {/* <Logo1 /> */}

                <TextInput placeholder="Usuário" style={Style.input}/>
                <TextInput placeholder="Senha" secureTextEntry style={Style.input} />

                <TouchableOpacity style={Style.button}>
                    <Text style={Style.buttonText}>ACESSAR</Text>
                </TouchableOpacity>

                <Text style={Style.text}>Ainda não possui uma conta? Cadastre-se!</Text>
            </View>
            
        </View>
    )
}

export default Login;
