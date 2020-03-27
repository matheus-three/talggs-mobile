import React,  { useState } from 'react';
import { View, TextInput, Text, Platform, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import SvgUri from 'expo-svg-uri';

import Style from './style';

const Register = () => {

    const [date, setDate] = useState('');

    let sexo = [
        {value: 'Feminino'}, {value: 'Masculino'}
    ];

    let uf = [
        {value: 'AC'}, {value: 'AL'}, {value: 'AP'}, {value: 'AM'}, {value: 'BA'}, {value: 'CE'}, {value: 'DF'}, {value: 'ES'}, {value: 'GO'}, {value: 'MA'}, {value: 'MT'}, {value: 'MS'}, {value: 'MG'}, {value: 'PA'}, {value: 'PB'}, {value: 'PR'}, {value: 'PE'}, {value: 'PI'}, {value: 'RJ'}, {value: 'RN'}, {value: 'RS'}, {value: 'RO'}, {value: 'RR'}, {value:'SC'},{value: 'SP'}, {value: 'SE'}, {value: 'TO'}
    ];


    const changeDate = value => {
        setDate(value);
    }

    return (
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
                <Text style={Style.header_title}>CADASTRO</Text>
            </View>

            <ScrollView>
                <View style={{alignItems: 'center'}}>
                    <TextInput placeholder="Nome Completo" style={Style.input}/>
                    <TextInput placeholder="E-mail" style={Style.input}/>
                    <TextInput placeholder="Senha" secureTextEntry style={Style.input}/>
                    <TextInput placeholder="Confirme sua senha" secureTextEntry style={Style.input}/> 
                    <TextInput placeholder="CPF" style={Style.input}/>

                    <Dropdown
                        containerStyle={{ width: '80%', height: 90, marginLeft: 10}}
                        style={{color: "#F7F6EE", paddingLeft: 20}}
                        baseColor="#F7F6EE"
                        itemTextStyle="#FFF"
                        fontSize={14}
                        dropdownPosition={-3}
                        label='Sexo'
                        data={sexo}
                    />

                    <Text style={Style.birthTitle}>Data de Nascimento:</Text>
                    <View style={[Style.birthDate, Style.row]}>
                        <DatePicker
                            format="DD/MM/YYYY"
                            style={Style.birthDate_component}
                            date={date}
                            customStyles={{
                                dateIcon: {
                                    position: 'absolute',
                                    left: 10,
                                    top: 10,
                                    marginLeft: 0,
                                    marginRight: 0,
                                },
                                dateInput: {
                                    display: "none",
                                }
                            }}
                            onDateChange={changeDate}
                        />
                        <Text style={Style.birthDate_date}>{date}</Text>
                    </View>         

                    <Text style={Style.addressTitle}>Endereço:</Text>

                    <View style={Style.row}>
                        <TextInput placeholder="CEP" style={[Style.input, Style.halfLg]}/>
                        <TextInput placeholder="Nº" style={[Style.input, Style.halfSm]}/>
                    </View>
                    <TextInput placeholder="Rua" style={Style.input}/>
                    <TextInput placeholder="Bairro" style={Style.input}/>
            
                    <View style={Style.row}>
                        <TextInput placeholder="Cidade" style={[Style.input, Style.halfLg]}/>
                        <Dropdown
                            containerStyle={{ width: '20%', height: 80, marginLeft: 10, marginTop: -15,  top: 21}}
                            style={{color: "#F7F6EE"}}
                            baseColor="#F7F6EE"
                            itemTextStyle="#FFF"
                            dropdownPosition={4}
                            fontSize={14}
                            label='UF'
                            data={uf}
                        />
                    </View>

                    <TouchableOpacity style={Style.button}>
                        <Text style={Style.button_text}>CADASTRAR-SE</Text>
                    </TouchableOpacity>
 
                </View>  
            </ScrollView>   
        </KeyboardAvoidingView>
    )
}

export default Register;
