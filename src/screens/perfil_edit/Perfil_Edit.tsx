import React,  { useState } from 'react';
import { View, TextInput, Text, Platform, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import SvgUri from 'expo-svg-uri';

import Style from './style';

const Edit = () => {

    //dados que virão por uma API
    const nome = "Jake Peralta"
    const email = "jake99@pda.com"
    const cpf = "999.999.999-99"
    const sexo = "Masculino"
    const dataNascimento = "17/05/1986"
    const cep = "18.321.297"
    const numero = "99"
    const rua = "Manuel Algusto Rangel"
    const bairro = "vila da Folha"
    const cidade = "Tokyo"


    const [date, setDate] = useState('');

    let uf = [
        {value: 'AC'}, {value: 'AL'}, {value: 'AP'}, {value: 'AM'}, {value: 'BA'}, {value: 'CE'}, {value: 'DF'}, {value: 'ES'}, {value: 'GO'}, {value: 'MA'}, {value: 'MT'}, {value: 'MS'}, {value: 'MG'}, {value: 'PA'}, {value: 'PB'}, {value: 'PR'}, {value: 'PE'}, {value: 'PI'}, {value: 'RJ'}, {value: 'RN'}, {value: 'RS'}, {value: 'RO'}, {value: 'RR'}, {value:'SC'},{value: 'SP'}, {value: 'SE'}, {value: 'TO'}
    ];

    const changeDate = value => {
        setDate(value);
    }

    return(
        <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={Style.container}
        > 

        <View style={[Style.header, Style.row]}>
            <SvgUri
                fill="#F7F6EE"
                fillAll
                style={Style.header_btn}
                source={require('../../../assets/setinha.svg')}
            /> 
            <Text style={Style.header_title}>PERFIL</Text>
        </View>

        <ScrollView>
            <View style={{alignItems: 'center'}}>
                <Text style={Style.labelTitle}>Nome Completo:</Text>
                <TextInput placeholder="Nome Completo" value={nome} style={Style.input}/>

                <Text style={Style.labelTitle}>CPF:</Text>
                <TextInput value={cpf} editable={false} style={Style.input}/>

                <Text style={Style.labelTitle}>Sexo:</Text>
                <TextInput value={sexo} editable={false} style={Style.input}/>

                <Text style={Style.labelTitle}>E-mail:</Text>
                <TextInput placeholder="E-mail" value={email} style={Style.input}/>

                <Text style={Style.labelTitle}>Data de Nascimento:</Text>
                <TextInput value={dataNascimento} editable={false} style={Style.input}/>       

                <Text style={Style.labelTitle}>Endereço:</Text>

                <View style={Style.row}>
                    <TextInput placeholder="CEP" value={cep} style={[Style.input, Style.halfLg]}/>
                    <TextInput placeholder="Nº" value={numero} style={[Style.input, Style.halfSm]}/>
                </View>
                <TextInput placeholder="Rua" value={rua} style={Style.input}/>
                <TextInput placeholder="Bairro" value={bairro} style={Style.input}/>
        
                <View style={Style.row}>
                    <TextInput placeholder="Cidade" value={cidade} style={[Style.input, Style.halfLg]}/>
                    <Dropdown
                        containerStyle={{ width: '20%', height: 80, marginLeft: 10, marginTop: -15,  top: -2}}
                        style={{color: "#F7F6EE"}}
                        baseColor="#F7F6EE"
                        itemTextStyle="#FFF"
                        dropdownPosition={4}
                        fontSize={14}
                        label='UF'
                        value="SP"
                        data={uf}
                    />
                </View>

                <View style={[Style.row, Style.buttonContainer]}>
                    <TouchableOpacity style={Style.button}>
                        <Text style={Style.button_text}>CANCELAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Style.button}>
                        <Text style={Style.button_text}>SALVAR</Text>
                    </TouchableOpacity>
                </View>

            </View>  
        </ScrollView>   
    </KeyboardAvoidingView>
    )
}

export default Edit;
