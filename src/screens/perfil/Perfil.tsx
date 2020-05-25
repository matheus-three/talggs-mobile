import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { AuthContext } from "../../Context";

import Styles from "./styles";
const chevronRight = <Icon name="chevron-right" size={25} color="#2D4F6C" />;

const Perfil = ({ navigation }) => {
    //dados que virão por uma API
    const [name, setName] = useState("Jake Peralta");

    const { signOut } = React.useContext(AuthContext);

    const confirmAlert = () => {
        Alert.alert(
            "Alerta",
            "Tem certeza que deseja sair da sua conta?",
            [
                {
                    text: "Não",
                    style: "cancel",
                },
                { text: "Sim", onPress: () => signOut() },
            ],
            { cancelable: false }
        );
    };

    return (
        <View style={Styles.container}>
            <View style={Styles.buttonContainer}>
                <TouchableOpacity
                    style={Styles.header}
                    onPress={() => navigation.navigate("PerfilEdit")}
                >
                    <Text style={Styles.title}>Editar Perfil</Text>
                    <Text>{chevronRight}</Text>
                </TouchableOpacity>
            </View>
            <View style={Styles.buttonContainer}>
                <TouchableOpacity style={Styles.header} onPress={confirmAlert}>
                    <Text style={Styles.title}>Logoff</Text>
                    <Text>{chevronRight}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
export default Perfil;
