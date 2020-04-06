import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../../Context'

export const Login = ({ navigation }) => {
const { signIn } = React.useContext(AuthContext);
return (
    <View>
    <Button title="Acessar" onPress={() => signIn()} /> 

    <Button
        title="Cadastre-se"
        onPress={() => navigation.push("Cadastro")} 
    />
    </View>
);
};

export default Login