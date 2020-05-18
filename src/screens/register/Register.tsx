import React,  { useState, useEffect } from 'react';
import { Button, View, TextInput, Text, Platform, ScrollView, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { Dropdown } from 'react-native-material-dropdown';
import DatePicker from 'react-native-datepicker';
import { AuthContext } from '../../Context'

import { TextInputMask } from 'react-native-masked-text';

import Style from './styles';

const Register = () => {
    const { signUp } = React.useContext(AuthContext);
    
    const uf = [
		{value: 'AC'}, {value: 'AL'}, {value: 'AP'}, {value: 'AM'}, {value: 'BA'}, {value: 'CE'}, {value: 'DF'}, {value: 'ES'}, {value: 'GO'}, {value: 'MA'}, {value: 'MT'}, {value: 'MS'}, {value: 'MG'}, {value: 'PA'}, {value: 'PB'}, {value: 'PR'}, {value: 'PE'}, {value: 'PI'}, {value: 'RJ'}, {value: 'RN'}, {value: 'RS'}, {value: 'RO'}, {value: 'RR'}, {value:'SC'},{value: 'SP'}, {value: 'SE'}, {value: 'TO'}
	];

    const optionsGender = [
        { text: 'Feminino', value: 1 },
        { text: 'Masculino', value: 2 },
    ];
    
    const [name, setName] = useState("");
    const [validName, setValidName] = useState(true);
    const genderData = [{ value: "Feminino" }, { value: "Masculino" }];
    const [gender, setGender] = useState("");
    const [validGender, setValidGender] = useState(true);
    const [birthDate, setBirthDate] = useState("");
    const [validBirthDate, setValidBirthDate] = useState(true);
    const [Cpf, setCpf] = useState("");
    const [validCpf, setValidCpf] = useState(true);
    const [Cep, setCep] = useState("");
    const [validCep, setValidCep] = useState(true);
    const [Logradouro, setLogradouro] = useState("");
    const [Cidade, setCidade] = useState("");
    const [Bairro, setBairro] = useState("");
    const [number, setNumber] = useState("");
    const [Uf, setUf] = useState("");
    const [validNumber, setValidNumber] = useState(true);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(true);

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
      if (gender === "") return false

      return true
    };

    const validateBirthDate = () => {
      if (birthDate === "") return false

      return true
    };

    const validateNumber = () => {
        if (number === "") return false;

        return true
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
        if (Cep == "") 
            return setValidCep(false)
        else {
            const validar = /^[0-9]{5}-[0-9]{3}$/;

            if (validar.test(Cep)) {
                getCep();
                setValidCep(true);
            } else setValidCep(false);
        }

        return true
    };

    const validaEmail = () => {
        const validar = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email === "") return false;
        
        if (validar.test(email) === false) return false;

        return true
    }

    const validaPassword = () => {
        if (password === "" && password.length <= 6)  return false

        return true
    };


    const [disabled, setDisabled] = useState(false);

    const validSubmit = () => {
        //if(disabled === true)
        if(!validName === true)
            signUp()
        else
            setValidName(false)
    }

    useEffect(() => {
        if (validName === true)
            alert("oi")
    }, [name]);


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
                {!validName ? <Text style={Style.error}>Você deve inserir o seu Nome Completo</Text> : null}

                <TextInputMask
                    placeholder="CPF"
                    type={'cpf'}
                    value={Cpf}
                    onChangeText={(value) => setCpf(value)}
                    style={Style.input}
                    onBlur={() => setValidCpf(validateCpf())}
                />
                {!validCpf ? <Text style={Style.error}>Você deve inserir um CPF válido</Text> : null}

				<Dropdown
					containerStyle={{ width: '80%', height: 90, marginLeft: 10}}
					style={{color: "#F7F6EE", paddingLeft: 20}}
					baseColor="#F7F6EE"
					itemTextStyle="#FFF"
					fontSize={14}
					dropdownPosition={-3}
                    label='Sexo'
                    onChangeText={(value) => setGender(value)}
                    onBlur={() => setValidGender(validateGender())}
                    data={genderData}
				/>
                {!validGender ? <Text style={[Style.error, Style.errorGender]}>Escolha um Sexo</Text> : null}


				<Text style={Style.birthTitle}>Data de Nascimento</Text>
				<View style={[Style.birthDate, Style.row]}>
					<DatePicker
						format="DD/MM/YYYY"
						style={Style.birthDate_component}
						value={birthDate}
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
                        onChangeText={(value) => setBirthDate(value)}
                        onBlur={() => setValidBirthDate(validateBirthDate())}
						data={birthDate}
					/>
					<TextInput style={Style.birthDate_date}>{birthDate}</TextInput>
				</View>         
                {!validBirthDate ? <Text style={Style.error}>Escolha a Data de Nascimento</Text> : null}

				<Text style={Style.addressTitle}>Endereço</Text>
                           
				<View style={Style.row}>
                    <TextInputMask
                        placeholder={"CEP"}
                        type={"zip-code"}
                        value={Cep}
                        onChangeText={(value) => setCep(value)}
                        style={[Style.input, Style.halfLg]}
                        onBlur={validaCep}
                    />

                    {!validCep ? <Text style={[Style.error, Style.errorCep]}>Você deve inserir um CEP válido</Text> : null}    


                    <TextInput
                        placeholder="Nº" 
                        value={number}
                        onChangeText={(value) => setNumber(value)}
                        style={[Style.input, Style.halfSm]}
                        onBlur={() => setValidNumber(validateNumber())}
                    />
                    {!validNumber ? <Text style={[Style.error, Style.errorNumber]}>Insira o Número</Text> : null}

				</View>

                <TextInput 
                    placeholder="Rua" 
                    style={Style.input}
                    value={Logradouro}
                />
                <TextInput 
                    placeholder="Bairro" 
                    style={Style.input}
                    value={Bairro}
                />

				<View style={Style.row}>
                    <TextInput 
                        placeholder="Cidade" 
                        style={[Style.input, Style.halfLg]}
                        value={Cidade}
                    />

					<Dropdown
						containerStyle={{ width: '20%', height: 80, marginLeft: 10, marginTop: -15,  top: 21}}
						style={{color: "#F7F6EE"}}
						baseColor="#F7F6EE"
						itemTextStyle="#FFF"
						dropdownPosition={4}
						fontSize={14}
						label='UF'
                        data={uf}
                        value={Uf}
					/>
				</View>

				<Text style={Style.addressTitle}>Login</Text>
                <TextInput 
                    placeholder="E-mail" 
                    value={email}
                    onChangeText={(value) => setEmail(value)}
                    style={Style.input}
                    onBlur={() => setValidEmail(validaEmail())}
                />
                  {!validEmail ? <Text style={Style.error}>Você deve inserir um E-mail válido</Text> : null}
			
                <TextInput
                        placeholder="Senha" 
                        secureTextEntry
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        style={Style.input}
                        onBlur={() => setValidPassword(validaPassword())}
                    />
                    {!validPassword ? <Text style={Style.error}>Você deve inserir uma Senha com mais de 5 digítos</Text> : null}

				<TouchableOpacity style={Style.button} onPress={() => validSubmit()}>
					<Text style={Style.button_text}>CADASTRAR-SE</Text>
				</TouchableOpacity>
			</View>  
		</ScrollView>   
	</KeyboardAvoidingView>
	);
};

export default Register
