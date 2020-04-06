import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Login from '../screens/login/Login'
import Register from '../screens/register/Register'

const Stack = createStackNavigator();
function RootLogin() {
	return (
		<Stack.Navigator>
			<Stack.Screen name="Login" component={Login} />
			<Stack.Screen 
				name="Cadastro" 
				component={Register} 
				options={{
					title: 'CADASTRO',
					headerStyle: {
					  backgroundColor: '#101D25',
					  height: 120,
					},
					headerTitleStyle: {
					  color: 'white',
					},
					headerTintColor:'white',
				  }} 
			/>
		</Stack.Navigator>
	);
}

export default RootLogin