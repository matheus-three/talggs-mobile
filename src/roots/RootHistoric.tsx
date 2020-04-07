import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

//import Historic from '../screens/historic/statusNavigation/Historic'
import Historic from '../screens/historic/Historic'
import HeaderHistoric from '../components/header/HeaderHistoric'

const Stack = createStackNavigator();
function RootHistoric() {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="Histórico" 
				component={Historic} 
				options={{
					title: 'Perfil',
					headerStyle: {
					  backgroundColor: '#101D25',
					  height: 120,
					},
				   
					headerTitleStyle: {
					  fontWeight: 'bold',
					},
					headerTitle: props => <HeaderHistoric name="Eai Jake Peralta, beleza?"/>
				  }} 
			/>
		</Stack.Navigator>
	);
}
export default RootHistoric