import React, { useState }  from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { AuthContext } from '../../Context'

import Style from './style';

const Perfil = ({ navigation }) => {
	const { signOut } = React.useContext(AuthContext);

	//dados que virão por uma API
	const [name, setName] = useState("Jake Peralta")

	return (
		<View style={Style.container}>
			<View style={Style.buttonContainer}>
                <TouchableOpacity style={Style.button} onPress={() => navigation.navigate('PerfilEdit')}>
                    <Text style={Style.button_text}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}  onPress={() => signOut()} >
                    <Text style={Style.button_text}>Logoff</Text>
                </TouchableOpacity>
            </View>
		</View>
	);
}
export default Perfil
