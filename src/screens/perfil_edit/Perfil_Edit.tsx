import React,  { useState } from 'react';
import { View, TextInput, Text, Platform, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import Style from './style';

import Header from '../../components/header/Header'

const Edit = () => {
    //dados que virão por uma API
    const [name, setName] = useState("Jake Peralta")
    const [email, setEmail] = useState("jake99@pda.com")
    const [cpf, setCpf] = useState("999.999.999-99")
    const [gender, setGender] = useState("Masculino")
    const [birthDate, setBirthDate] = useState("17/05/1986")
    const [cep, setCep] = useState("18.321.297")
    const [number, setNumber] = useState("99")
    const [street, setStreet] = useState("Manuel Algusto Rangel")
    const [neighborhood, setNeighborhood] = useState("Vila da Folha")
    const [city, setCity] = useState("Tokyo")

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

        <View style={Style.statusBar}></View>
        <Header title="PERFIL" name={name} seta="true"/>

        <ScrollView>
            <View style={{alignItems: 'center'}}>
                <Text style={Style.labelTitle}>Nome Completo:</Text>
                <TextInput placeholder="Nome Completo" value={name} style={Style.input}/>

                <Text style={Style.labelTitle}>CPF:</Text>
                <TextInput value={cpf} editable={false} style={[Style.input, Style.block]}/>

                <Text style={Style.labelTitle}>Sexo:</Text>
                <TextInput value={gender} editable={false} style={[Style.input, Style.block]}/>

                <Text style={Style.labelTitle}>E-mail:</Text>
                <TextInput placeholder="E-mail" value={email} style={Style.input}/>

                <Text style={Style.labelTitle}>Data de Nascimento:</Text>
                <TextInput value={birthDate} editable={false} style={[Style.input, Style.block]}/>       

                <Text style={Style.labelTitle}>Endereço:</Text>

                <View style={Style.doubleTitle}>
                    <Text style={Style.labelTitleAddress}>CEP</Text>
                    <Text style={[Style.labelTitleAddress, Style.number]}>Nº</Text>
                </View> 
                <View style={Style.row}>
                    <TextInput placeholder="CEP" value={cep} style={[Style.input, Style.halfLg]}/>
                    <TextInput placeholder="Nº" value={number} style={[Style.input, Style.halfSm]}/>
                </View>

                <Text style={Style.labelTitleAddress}>RUA</Text>
                <TextInput placeholder="Rua" value={street} style={Style.input}/>

                <Text style={Style.labelTitleAddress}>BAIRRO</Text>
                <TextInput placeholder="Bairro" value={neighborhood} style={Style.input}/>
        
                <Text style={[Style.labelTitleAddress, Style.city]}>CIDADE</Text>
                <View style={Style.row}>
                    <TextInput placeholder="Cidade" value={city} style={[Style.input, Style.halfLg, Style.cityHeight]}/>
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
