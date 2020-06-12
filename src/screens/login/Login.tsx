import React, { useState, useContext, useEffect } from "react";
import {
    KeyboardAvoidingView,
    TextInput,
    Text,
    Platform,
    Alert,
    View,
} from "react-native";

import SvgUri from "expo-svg-uri";

import GradientButton from "react-native-gradient-buttons";

import { AuthContext } from "../../Context";

import Styles from "./styles";

import firebase from "firebase";
import { Loading } from "../../components/loading/index";

const Login = ({ navigation }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(true);
    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(true);

    const { signIn } = useContext(AuthContext);

    const LoginUser = () => {
        setIsLoading(true);

        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                signIn();
                setIsLoading(false);
            })
            .catch((err) => {
                setIsLoading(false);
                console.log(err);
                Alert.alert("Falha ao autenticar usuário");
            });
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

    const validSubmit = () => {
        if (email === "" && password === "") {
            Alert.alert("Preencha todos os campos corretamente");
        }
        if (validEmail && validPassword) {
            LoginUser();
        } else {
            Alert.alert("Preencha todos os campos corretamente");
        }
    };
    const IsLoggedUser = () => {
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log(true);
            } else {
                console.log(false);
            }
        });
    };

    useEffect(() => {
        IsLoggedUser();
    });

    return (
        <Loading loading={isLoading}>
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
                    onPressAction={() => validSubmit()}
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
        </Loading>
    );
};

export default Login;
