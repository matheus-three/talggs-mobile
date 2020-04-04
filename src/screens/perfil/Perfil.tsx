import React, { useState }  from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Style from './style';

import Header from '../../components/header/Header'

const Perfil = () => {
    //dados que virão por uma API
    const [name, setName] = useState("Jake Peralta")

    return(
        <View style={Style.container}>
            <Header title="PERFIL" name={name} arrowBtn="false"/>
            <View style={Style.buttonContainer}>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.button_text}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}>
                    <Text style={Style.button_text}>Logoff</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Perfil