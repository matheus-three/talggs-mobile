import React,  { useState } from 'react';
import { Button, View, TextInput, Text, Platform, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import { AuthContext } from '../../Context'

import { TextInputMask } from 'react-native-masked-text';

import Style from './styles';

const Register = () => {
	const uf = [
		{value: 'AC'}, {value: 'AL'}, {value: 'AP'}, {value: 'AM'}, {value: 'BA'}, {value: 'CE'}, {value: 'DF'}, {value: 'ES'}, {value: 'GO'}, {value: 'MA'}, {value: 'MT'}, {value: 'MS'}, {value: 'MG'}, {value: 'PA'}, {value: 'PB'}, {value: 'PR'}, {value: 'PE'}, {value: 'PI'}, {value: 'RJ'}, {value: 'RN'}, {value: 'RS'}, {value: 'RO'}, {value: 'RR'}, {value:'SC'},{value: 'SP'}, {value: 'SE'}, {value: 'TO'}
	];

	const changeDate = value => {
		setDate(value);
	}

	const { signUp } = React.useContext(AuthContext);


    //validacoes 2
    const [name, setName] = useState("");
    const [validName, setValidName] = useState(true);
    const gender = [{ value: "Feminino" }, { value: "Masculino" }];
    const [validGender, setValidGender] = useState(true);
    const [date, setDate] = useState("");
    const [Cpf, setCpf] = useState("");
    const [validCpf, setValidCpf] = useState(true);
    const [Cep, setCep] = useState("");
    const [validCep, setValidCep] = useState(true);
    const [Logradouro, setLogradouro] = useState("");
    const [Numero, setNumber] = useState("");
    const [Complemento, setComplemento] = useState("");
    const [Uf, setUf] = useState("");
    const [Cidade, setCidade] = useState("");
    const [Bairro, setBairro] = useState("");

    const validateName = () => {
        const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;

        if (name == "") return false;

        if (!pattern.test(name)) return false;
        
        return true;
    }

    const validateCpf = () => {
        const CPF = Cpf.replace(/[^\d]+/g, "");

        if (CPF == "") return false;

        // Elimina CPFs invalidos conhecidos
        if (
            CPF.length != 11 ||
            CPF == "00000000000" ||
            CPF == "11111111111" ||
            CPF == "22222222222" ||
            CPF == "33333333333" ||
            CPF == "44444444444" ||
            CPF == "55555555555" ||
            CPF == "66666666666" ||
            CPF == "77777777777" ||
            CPF == "88888888888" ||
            CPF == "99999999999"
        )
            return false;

        // Valida 1o digito
        let add = 0;
        for (let i = 0; i < 9; i++) add += parseInt(CPF.charAt(i)) * (10 - i);
        let result = 11 - (add % 11);

        if (result == 10 || result == 11) result = 0;

        if (result != parseInt(CPF.charAt(9))) return false;

        // Valida 2o digito
        add = 0;
        for (let i = 0; i < 10; i++) add += parseInt(CPF.charAt(i)) * (11 - i);
        result = 11 - (add % 11);

        if (result == 10 || result == 11) result = 0;

        if (result != parseInt(CPF.charAt(10))) return false;

        return true;
    };

    const validateGender = () => {
      
    };


    const getCep = async () => {
        try {
            let call = await fetch(`https://viacep.com.br/ws/${Cep}/json/`);
            let cep = await call.json();

            contentCep(cep);
        } catch (err) {
            console.log("deu ruim");
        }
    };

    function contentCep(value) {
        setLogradouro(value.logradouro);
        setUf(value.uf);
        setCidade(value.localidade);
        setBairro(value.bairro);
    }

    const validaCep = () => {
        if (Cep != "") {
            const validar = /^[0-9]{5}-[0-9]{3}$/;

            if (validar.test(Cep)) {
                getCep();
                setValidCep(true);
            } else setValidCep(false);
        }
    };





	return (
	<KeyboardAvoidingView
		behavior={Platform.OS == "ios" ? "padding" : "height"}
		style={Style.container}
	> 

		<ScrollView>
			<View style={{alignItems: 'center'}}>
                <TextInput
                    placeholder="Nome Completo"
                    value={name}
                    onChangeText={(value) => setName(value)}
                    style={Style.input}
                    onBlur={() => setValidName(validateName())}
                />
                {!validName ? <Text style={{ fontSize: 10, color: "red" }}>Você deve inserir o seu Nome Completo</Text> : null}

                <TextInputMask
                    placeholder="CPF"
                    type={'cpf'}
                    value={Cpf}
                    onChangeText={(value) => setCpf(value)}
                    style={Style.input}
                    onBlur={() => setValidCpf(validateCpf())}
                />
                {!validCpf ? <Text style={{ fontSize: 10, color: "red" }}>Você deve inserir um CPF válido</Text> : null}

				<Dropdown
					containerStyle={{ width: '80%', height: 90, marginLeft: 10}}
					style={{color: "#F7F6EE", paddingLeft: 20}}
					baseColor="#F7F6EE"
					itemTextStyle="#FFF"
					fontSize={14}
					dropdownPosition={-3}
                    label='Sexo'
                    data={gender}
                    value="Feminino"
				/>
                {!gender ? <Text style={{ fontSize: 10, color: "red"}}>Escolha um Sexo</Text> : null}


				<Text style={Style.birthTitle}>Data de Nascimento</Text>
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

				<Text style={Style.addressTitle}>Endereço</Text>

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

				<Text style={Style.addressTitle}>Login</Text>
				<TextInput placeholder="E-mail" style={Style.input}/>
				<TextInput placeholder="Senha" secureTextEntry style={Style.input}/>
				<TextInput placeholder="Confirme sua senha" secureTextEntry style={Style.input}/> 

				<TouchableOpacity style={Style.button} onPress={() => signUp()}>
					<Text style={Style.button_text}>CADASTRAR-SE</Text>
				</TouchableOpacity>
			</View>  
		</ScrollView>   
	</KeyboardAvoidingView>
	);
};

export default Register
