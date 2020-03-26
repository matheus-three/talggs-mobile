
import React,  { useState , Component} from 'react';
import { View, TextInput, Text, Button, Platform, ScrollView } from 'react-native';
import DatePicker from 'react-native-datepicker';


import Style from './style';

const Register = () => {

    const [date, setDate] = useState('');

    const changeDate = value => {
        setDate(value);
    }

    return (
        <ScrollView>
            <View style={Style.container}>
                <View style={Style.header}>
                    <Text style={Style.header_title}>Cadastro</Text>
                </View>
                <TextInput placeholder="Nome Completo" style={Style.input}/>
                <TextInput placeholder="E-mail" style={Style.input}/>
                <TextInput placeholder="Senha" secureTextEntry style={Style.input}/>
                <TextInput placeholder="Confirme sua senha" secureTextEntry style={Style.input}/> 
                <TextInput placeholder="CPF" style={Style.input}/>
                <TextInput placeholder="Sexo" style={Style.input}/>

                <Text style={Style.birthTitle}>Data de Nascimento:</Text>
                <View style={Style.birthDate}>
                    <DatePicker
                        placeholder="Data de Nascimento"
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
                    <TextInput placeholder="CPF" style={[Style.input, Style.halfLg]}/>
                    <TextInput placeholder="Nº" style={[Style.input, Style.halfSm]}/>
                </View>

                <TextInput placeholder="Rua.Bairro" style={Style.input}/>

                <View style={Style.row}>
                    <TextInput placeholder="Cidade" style={[Style.input, Style.halfLg]}/>
                    <TextInput placeholder="UE" style={[Style.input, Style.halfSm]}/>
                </View>
            </View>  
        </ScrollView>         
    )
}

export default Register;
