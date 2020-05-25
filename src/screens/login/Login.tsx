import React, { useState } from "react";
import {
    KeyboardAvoidingView,
    TextInput,
    Text,
    Platform,
    View,
} from "react-native";
import SvgUri from "expo-svg-uri";
import GradientButton from "react-native-gradient-buttons";
import { AuthContext } from "../../Context";
import { TextInputMask } from "react-native-masked-text";

import Styles from "./styles";

const Login = ({ navigation }) => {
    const { signIn } = React.useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(true);

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

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={Styles.container}
        >
            <SvgUri
                width="260"
                height="260"
                source={require("../../../assets/Logo1.svg")}
            />

            <TextInput
                placeholder="E-mail"
                value={email}
                onChangeText={(value) => setEmail(value)}
                style={Styles.input}
                onBlur={() => setValidEmail(validateEmail())}
            />
            {!validEmail ? (
                <Text style={Styles.error}>
                    Você deve inserir um E-mail válido
                </Text>
            ) : (
                <Text style={Styles.inputMargin} />
            )}

            <TextInput
                placeholder="Senha"
                secureTextEntry
                value={password}
                onChangeText={(value) => setPassword(value)}
                style={Styles.input}
                onBlur={() => setValidPassword(validatePassword())}
            />
            {!validPassword ? (
                <Text style={Styles.error}>
                    Você deve inserir uma Senha com mais de 5 digítos
                </Text>
            ) : (
                <Text style={Styles.inputMargin} />
            )}

            <GradientButton
                textStyle={{ fontSize: 20, color: "#2D4F6C" }}
                gradientBegin="#F2A950"
                gradientEnd="#A7E4F2"
                height={60}
                width="80%"
                radius={50}
                impact
                impactStyle="Light"
                onPressAction={() => signIn()}
            >
                ACESSAR
            </GradientButton>

            <Text
                style={Styles.text}
                onPress={() => navigation.push("Cadastro")}
            >
                Ainda não possui uma conta? Cadastre-se!
            </Text>
        </KeyboardAvoidingView>
    );
};

export default Login;
