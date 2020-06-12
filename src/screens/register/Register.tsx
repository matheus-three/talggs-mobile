import React, { useState, useContext } from "react";
import {
    Button,
    View,
    TextInput,
    Text,
    Platform,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
    Alert,
} from "react-native";

import { Dropdown } from "react-native-material-dropdown";

import { AuthContext } from "../../Context";

import { TextInputMask } from "react-native-masked-text";

import Style from "./styles";

import firebase from "firebase";

import { Loading } from "../../components/loading/index";

const Register = () => {
    const [isLoading, setIsLoading] = useState(false);
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
    const [isValid, setIsValid] = useState(false);

    const { signUp } = useContext(AuthContext);

    const uf = [
        { value: "AC" },
        { value: "AL" },
        { value: "AP" },
        { value: "AM" },
        { value: "BA" },
        { value: "CE" },
        { value: "DF" },
        { value: "ES" },
        { value: "GO" },
        { value: "MA" },
        { value: "MT" },
        { value: "MS" },
        { value: "MG" },
        { value: "PA" },
        { value: "PB" },
        { value: "PR" },
        { value: "PE" },
        { value: "PI" },
        { value: "RJ" },
        { value: "RN" },
        { value: "RS" },
        { value: "RO" },
        { value: "RR" },
        { value: "SC" },
        { value: "SP" },
        { value: "SE" },
        { value: "TO" },
    ];

    const optionsGender = [
        { text: "Feminino", value: 1 },
        { text: "Masculino", value: 2 },
    ];

    const validateName = () => {
        const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;

        if (name == "") return false;

        if (!pattern.test(name)) return false;

        return true;
    };

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
        if (gender === "") return false;

        return true;
    };

    const validateBirthDate = () => {
        let validar = /^(((0[1-9]|[12][0-9]|3[01])([-.\/])(0[13578]|10|12)([-.\/])(\d{4}))|(([0][1-9]|[12][0-9]|30)([-.\/])(0[469]|11)([-.\/])(\d{4}))|((0[1-9]|1[0-9]|2[0-8])([-.\/])(02)([-.\/])(\d{4}))|((29)(\.|-|\/)(02)([-.\/])([02468][048]00))|((29)([-.\/])(02)([-.\/])([13579][26]00))|((29)([-.\/])(02)([-.\/])([0-9][0-9][0][48]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][2468][048]))|((29)([-.\/])(02)([-.\/])([0-9][0-9][13579][26])))$/;

        if (birthDate === "") return false;

        if (validar.test(birthDate) === false) return false;

        return true;
    };

    const validateCep = () => {
        if (Cep == "") return setValidCep(false);
        else {
            const validar = /^[0-9]{5}-[0-9]{3}$/;

            if (validar.test(Cep)) {
                getCep();
            } else setValidCep(false);
        }

        return true;
    };

    const getCep = async () => {
        try {
            let call = await fetch(`https://viacep.com.br/ws/${Cep}/json/`);
            let cep = await call.json();

            if (cep.erro) setValidCep(false);
            else setValidCep(true);

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

    const validateNumber = () => {
        const validar = /^[0-9]$/;

        if (number === "") return false;

        if (!validar.test(number) === false) return false;

        return true;
    };

    const validateEmail = () => {
        const validar = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

        if (email === "") return false;

        if (validar.test(email) === false) return false;

        return true;
    };

    const validatePassword = () => {
        if (password === "" || password.length < 6) return false;

        return true;
    };

    const CreateUser = (email, password) => {
        setIsLoading(true);

        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .then(async (result) => {
                signUp();
                await result.user.updateProfile({
                    displayName: name,
                });
                setIsLoading(false);
                CreateInfoUser();
            })
            .catch((err) => {
                setIsLoading(false);
                alert("Falha ao cadastrar");
            });
    };

    const CreateInfoUser = () => {
        const data = {
            CEP: Cep,
            CPF: Cpf,
            birthDate: birthDate,
            city: Cidade,
            district: Bairro,
            email: email,
            name: name,
            number: number,
            password: password,
            sex: gender,
            street: Logradouro,
            uf: Uf,
        };

        const dbh = firebase.firestore();
        dbh.collection("user-mobile").add(data);
    };

    const validSubmit = () => {
        getIsValid();

        if (isValid) {
            CreateUser(email, password);
        }

        return;
    };

    const getIsValid = () => {
        if (
            validName &&
            validGender &&
            validBirthDate &&
            validCpf &&
            validCep &&
            validNumber &&
            validEmail &&
            validPassword
        )
            setIsValid(true);
        else return;
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={Style.container}
        >
            <Loading loading={isLoading}>
                <ScrollView>
                    <View style={{ alignItems: "center" }}>
                        <TextInput
                            placeholder="Nome Completo"
                            value={name}
                            onChangeText={(value) => setName(value)}
                            style={Style.input}
                            onBlur={() => setValidName(validateName())}
                        />
                        {!validName ? (
                            <Text style={Style.error}>
                                Você deve inserir o seu Nome Completo
                            </Text>
                        ) : null}

                        <TextInputMask
                            placeholder="CPF"
                            type={"cpf"}
                            value={Cpf}
                            onChangeText={(value) => setCpf(value)}
                            style={Style.input}
                            onBlur={() => setValidCpf(validateCpf())}
                        />
                        {!validCpf ? (
                            <Text style={Style.error}>
                                Você deve inserir um CPF válido
                            </Text>
                        ) : null}

                        <Dropdown
                            containerStyle={{
                                width: "80%",
                                height: 60,
                                marginLeft: 10,
                            }}
                            style={{ color: "#F7F6EE", paddingLeft: 20 }}
                            baseColor="#F7F6EE"
                            itemTextStyle="#FFF"
                            fontSize={14}
                            dropdownPosition={-3}
                            label="Sexo"
                            onChangeText={(value) => setGender(value)}
                            onBlur={() => setValidGender(validateGender())}
                            data={genderData}
                        />
                        {!validGender ? (
                            <Text style={Style.error}>Escolha um Sexo</Text>
                        ) : null}

                        <TextInputMask
                            placeholder={"Data de Nascimento"}
                            type={"datetime"}
                            value={birthDate}
                            options={{ format: "DD/MM/YYYY" }}
                            style={Style.input}
                            onChangeText={(value) => setBirthDate(value)}
                            onBlur={() =>
                                setValidBirthDate(validateBirthDate())
                            }
                        />
                        {!validBirthDate ? (
                            <Text style={Style.error}>
                                Você deve inserir uma Data de Nascimento válida
                            </Text>
                        ) : null}

                        <Text style={Style.addressTitle}>Endereço</Text>

                        <View style={Style.row}>
                            <TextInputMask
                                placeholder={"CEP"}
                                type={"zip-code"}
                                value={Cep}
                                onChangeText={(value) => setCep(value)}
                                style={[Style.input, Style.halfLg]}
                                onBlur={validateCep}
                            />

                            {!validCep ? (
                                <Text style={[Style.error, Style.errorCep]}>
                                    Você deve inserir um CEP válido
                                </Text>
                            ) : null}

                            <TextInput
                                placeholder="Nº"
                                keyboardType="numeric"
                                value={number}
                                onChangeText={(value) => setNumber(value)}
                                style={[Style.input, Style.halfSm]}
                                onBlur={() => setValidNumber(validateNumber())}
                            />
                            {!validNumber ? (
                                <Text style={[Style.error, Style.errorNumber]}>
                                    Insira o Número
                                </Text>
                            ) : null}
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
                                containerStyle={{
                                    width: "20%",
                                    height: 80,
                                    marginLeft: 10,
                                    marginTop: -15,
                                    top: 21,
                                }}
                                style={{ color: "#F7F6EE" }}
                                baseColor="#F7F6EE"
                                itemTextStyle="#FFF"
                                dropdownPosition={4}
                                fontSize={14}
                                label="UF"
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
                            onBlur={() => setValidEmail(validateEmail())}
                        />
                        {!validEmail ? (
                            <Text style={Style.error}>
                                Você deve inserir um E-mail válido
                            </Text>
                        ) : null}

                        <TextInput
                            placeholder="Senha"
                            secureTextEntry
                            value={password}
                            onChangeText={(value) => setPassword(value)}
                            style={Style.input}
                            onBlur={() => setValidPassword(validatePassword())}
                        />
                        {!validPassword ? (
                            <Text style={Style.error}>
                                Você deve inserir uma Senha com mais de 5
                                digítos
                            </Text>
                        ) : null}

                        <TouchableOpacity
                            style={Style.button}
                            onPress={() => {
                                validSubmit();
                            }}
                        >
                            <Text style={Style.button_text}>CADASTRAR-SE</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </Loading>
        </KeyboardAvoidingView>
    );
};

export default Register;
