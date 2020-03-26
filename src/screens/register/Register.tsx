import React from 'react';
import { View, TextInput, Text,  } from 'react-native';
import DropDownItem from 'react-native-drop-down-item';

import Style from './style';

const Register = () => {
    return(
        <View style={Style.container}>
            <View style={Style.header}>
                <Text style={Style.header_title}>Cadastro</Text>
            </View>
                <TextInput placeholder="Nome Completo" style={Style.input}/>
                <TextInput placeholder="E-mail" style={Style.input}/>
                <TextInput placeholder="Senha" secureTextEntry style={Style.input}/>
                <TextInput placeholder="Confirme sua senha" secureTextEntry style={Style.input}/> 
            </View>
    )
}

export default Register;


//enum="password"