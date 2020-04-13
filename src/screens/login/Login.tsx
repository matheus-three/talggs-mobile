import * as React from 'react';
import { KeyboardAvoidingView, TextInput, Text, Platform, } from 'react-native';
import SvgUri from "expo-svg-uri";
import GradientButton from 'react-native-gradient-buttons'
import { AuthContext } from '../../Context'

import Styles from './styles'

const Login = ({ navigation }) => {
const { signIn } = React.useContext(AuthContext);

return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={Styles.container}
        > 
            <SvgUri
                width="260"
                height="260"
                source={require('../../../assets/Logo1.svg')}
            />

            <TextInput placeholder="Usuário" style={Styles.input} />
            <TextInput placeholder="Senha" secureTextEntry style={Styles.input} />

            <GradientButton
                textStyle={{ fontSize: 20, color: '#2D4F6C' }}
                gradientBegin="#F2A950"
                gradientEnd="#A7E4F2"
                height={60}
                width='80%'
                radius={50}
                impact
                impactStyle='Light'
                onPressAction = {() => signIn()} 
            >
                ACESSAR
            </GradientButton>

            <Text style={Styles.text} onPress={() => navigation.push("Cadastro")}>Ainda não possui uma conta? Cadastre-se!</Text>

        </KeyboardAvoidingView>
    );
};

export default Login

