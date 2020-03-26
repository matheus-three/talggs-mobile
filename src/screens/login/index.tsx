import React, { useState } from 'react';

import { View, TextInput, Text, Button } from 'react-native';

import Style from './style';


const Login = () => {
    return (
        <View>
            <View style={Style.container}>
                <TextInput placeholder="Usuário" style={Style.input}/>
                <TextInput placeholder="Senha" secureTextEntry style={Style.input} />

                <Button title="ACESSAR"/>

                <Text style={Style.text}>Ainda não tem uma conta? Cadastre-se!</Text>
            </View>
            
        </View>
    )
}

export default Login;
