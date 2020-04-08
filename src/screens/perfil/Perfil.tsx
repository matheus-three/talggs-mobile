import React, { useState }  from 'react';
import { View, Text, TouchableOpacity, Alert} from 'react-native';
import { AuthContext } from '../../Context'

import Style from './style';

const Perfil = ({ navigation }) => {
	//dados que virão por uma API
	const [name, setName] = useState("Jake Peralta")

	const { signOut } = React.useContext(AuthContext);

	const confirmAlert = () => {
		Alert.alert (
			'Alerta',
			'Tem certeza que deseja sair da sua conta?',
			[
			  {
				text: 'Não',
				style: 'cancel',
			  },
			  {text: 'Sim', onPress: () => signOut()},
			],
			{cancelable: false},
		)
	}

	return (
		<View style={Style.container}>
			<View style={Style.buttonContainer}>
                <TouchableOpacity style={Style.button} onPress={() => navigation.navigate('PerfilEdit')}>
                    <Text style={Style.button_text}>Editar Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Style.button}  onPress= {confirmAlert} >
                    <Text style={Style.button_text}>Logoff</Text>
                </TouchableOpacity>
            </View>
		</View>
	);
}
export default Perfil

