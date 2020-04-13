import React,  { useState } from 'react';
import { View, TextInput, Text, Platform, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';

import Styles from './styles';

const PerfilEdit = () => {
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

	return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={Styles.container}
        > 
    
        <ScrollView>
            <View style={{alignItems: 'center', marginTop: 20}}>
                <Text style={Styles.labelTitle}>Nome Completo:</Text>
                <TextInput placeholder="Nome Completo" value={name} style={Styles.input}/>

                <Text style={Styles.labelTitle}>CPF:</Text>
                <TextInput value={cpf} editable={false} style={[Styles.input, Styles.block]}/>

                <Text style={Styles.labelTitle}>Sexo:</Text>
                <TextInput value={gender} editable={false} style={[Styles.input, Styles.block]}/>

                <Text style={Styles.labelTitle}>E-mail:</Text>
                <TextInput placeholder="E-mail" value={email} style={Styles.input}/>

                <Text style={Styles.labelTitle}>Data de Nascimento:</Text>
                <TextInput value={birthDate} editable={false} style={[Styles.input, Styles.block]}/>       

                <Text style={Styles.labelTitle}>Endereço:</Text>

                <View style={Styles.doubleTitle}>
                    <Text style={Styles.labelTitleAddress}>CEP</Text>
                    <Text style={[Styles.labelTitleAddress, Styles.number]}>Nº</Text>
                </View> 
                <View style={Styles.row}>
                    <TextInput placeholder="CEP" value={cep} style={[Styles.input, Styles.halfLg]}/>
                    <TextInput placeholder="Nº" value={number} style={[Styles.input, Styles.halfSm]}/>
                </View>

                <Text style={Styles.labelTitleAddress}>RUA</Text>
                <TextInput placeholder="Rua" value={street} style={Styles.input}/>

                <Text style={Styles.labelTitleAddress}>BAIRRO</Text>
                <TextInput placeholder="Bairro" value={neighborhood} style={Styles.input}/>
        
                <Text style={[Styles.labelTitleAddress, Styles.city]}>CIDADE</Text>
                <View style={Styles.row}>
                    <TextInput placeholder="Cidade" value={city} style={[Styles.input, Styles.halfLg, Styles.cityHeight]}/>
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

                <View style={[Styles.row, Styles.buttonContainer]}>
                    <TouchableOpacity style={Styles.button}>
                        <Text style={Styles.button_text}>CANCELAR</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={Styles.button}>
                        <Text style={Styles.button_text}>SALVAR</Text>
                    </TouchableOpacity>
                </View>

            </View>  
        </ScrollView>   
    </KeyboardAvoidingView>
	);
}

export default PerfilEdit
  
