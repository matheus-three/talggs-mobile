import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HistoricTabMenu from '../screens/historic/HistoricTabMenu'
import HeaderHistoric from '../components/header/HeaderHistoric'

const Stack = createStackNavigator();
function RootHistoric() {
	return (
		<Stack.Navigator>
			<Stack.Screen 
				name="Histórico" 
				component={HistoricTabMenu} 
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