import React, { useState } from "react";
import {
    View,
    TextInput,
    Text,
    Platform,
    ScrollView,
    TouchableOpacity,
    KeyboardAvoidingView,
} from "react-native";
import { Dropdown } from "react-native-material-dropdown";
import { TextInputMask } from "react-native-masked-text";

import Styles from "./styles";

const PerfilEdit = () => {
    //dados que virão por uma API
    const [name, setName] = useState("Jake Peralta");
    const [validName, setValidName] = useState(true);
    const [cpf, setCpf] = useState("999.999.999-99");
    const [gender, setGender] = useState("Masculino");
    const [birthDate, setBirthDate] = useState("17/05/1986");
    const [Cep, setCep] = useState("18076552");
    const [validCep, setValidCep] = useState(true);
    const [number, setNumber] = useState("22");
    const [validNumber, setValidNumber] = useState(true);
    const [Logradouro, setLogradouro] = useState("Clã Ushiha");
    const [Bairro, setBairro] = useState("Vila do Folha");
    const [Cidade, setCidade] = useState("Cidade do Fogo");
    const [Uf, setUf] = useState("");
    const [email, setEmail] = useState("jaeperalta99@mgmail.com");
    const [validEmail, setValidEmail] = useState(true);

    const [date, setDate] = useState("");

    const validateName = () => {
        const pattern = /^[a-zA-Z]{2,40}( [a-zA-Z]{2,40})+$/;

        if (name == "") return false;

        if (!pattern.test(name)) return false;

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

    const changeDate = (value) => {
        setDate(value);
    };

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={Styles.container}
        >
            <ScrollView>
                <View style={{ alignItems: "center", marginTop: 20 }}>
                    <Text style={Styles.labelTitle}>Nome Completo:</Text>
                    <TextInput
                        value={name}
                        onChangeText={(value) => setName(value)}
                        style={Styles.input}
                        onBlur={() => setValidName(validateName())}
                    />
                    {!validName ? (
                        <Text style={Styles.error}>
                            Você deve inserir o seu Nome Completo
                        </Text>
                    ) : null}

                    <Text style={Styles.labelTitle}>CPF:</Text>
                    <TextInput
                        value={cpf}
                        editable={false}
                        style={[Styles.input, Styles.block]}
                    />

                    <Text style={Styles.labelTitle}>Sexo:</Text>
                    <TextInput
                        value={gender}
                        editable={false}
                        style={[Styles.input, Styles.block]}
                    />

                    <Text style={Styles.labelTitle}>Data de Nascimento:</Text>
                    <TextInput
                        value={birthDate}
                        editable={false}
                        style={[Styles.input, Styles.block]}
                    />

                    <Text style={Styles.labelTitle}>Endereço:</Text>

                    <View style={Styles.doubleTitle}>
                        <Text style={Styles.labelTitleAddress}>CEP</Text>
                        <Text style={[Styles.labelTitleAddress, Styles.number]}>
                            Nº
                        </Text>
                    </View>
                    <View style={Styles.row}>
                        <TextInputMask
                            type={"zip-code"}
                            value={Cep}
                            onChangeText={(value) => setCep(value)}
                            style={[Styles.input, Styles.halfLg]}
                            onBlur={validateCep}
                        />
                        {!validCep ? (
                            <Text style={[Styles.error, Styles.errorCep]}>
                                Você deve inserir um CEP válido
                            </Text>
                        ) : null}

                        <TextInput
                            keyboardType="numeric"
                            value={number}
                            onChangeText={(value) => setNumber(value)}
                            style={[Styles.input, Styles.halfSm]}
                            onBlur={() => setValidNumber(validateNumber())}
                        />
                        {!validNumber ? (
                            <Text style={[Styles.error, Styles.errorNumber]}>
                                Insira o Número
                            </Text>
                        ) : null}
                    </View>

                    <Text style={Styles.labelTitleAddress}>RUA</Text>
                    <TextInput
                        style={Styles.input}
                        value={Logradouro}
                    />

                    <Text style={Styles.labelTitleAddress}>BAIRRO</Text>
                    <TextInput
                        style={Styles.input}
                        value={Bairro}
                    />

                    <Text style={[Styles.labelTitleAddress, Styles.city]}>
                        CIDADE
                    </Text>
                    <View style={Styles.row}>
                        <TextInput
                            style={[
                                Styles.input,
                                Styles.halfLg,
                                Styles.cityHeight,
                            ]}
                            value={Cidade}
                        />
                        <Dropdown
                            containerStyle={{
                                width: "20%",
                                height: 80,
                                marginLeft: 10,
                                marginTop: -15,
                                top: -2,
                            }}
                            style={{ color: "#F7F6EE" }}
                            baseColor="#F7F6EE"
                            itemTextStyle="#FFF"
                            dropdownPosition={4}
                            fontSize={14}
                            label="UF"
                            value="SP"
                            data={uf}
                        />
                    </View>

                    <Text style={Styles.labelTitle}>E-mail:</Text>
                    <TextInput
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                        style={Styles.input}
                        onBlur={() => setValidEmail(validateEmail())}
                    />
                    {!validEmail ? (
                        <Text style={Styles.error}>
                            Você deve inserir um E-mail válido
                        </Text>
                    ) : null}

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
};

export default PerfilEdit;
