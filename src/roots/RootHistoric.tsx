import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HistoricTabMenu from '../screens/historic/HistoricTabMenu'
import HeaderHistoric from '../components/header/HeaderHistoric'
import PurchaseDetails from '../screens/historic/PurchaseDetails/PurchaseDetails'
import HeaderLeft from '../components/header/HeaderLeft'

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
			<Stack.Screen 
				name="PurchaseDetails" 
				component={PurchaseDetails} 
				options={{
					title: 'Detalhes',
					headerStyle: {
					  backgroundColor: '#101D25',
					  height: 140,
					},
					headerTitleStyle: {
					  fontWeight: 'bold',
					  color: '#F7F6EE',
					},
					headerTintColor:'#F7F6EE',
					headerLeftContainerStyle: {
					  top: 65,
					},
					headerTitle: props => <HeaderLeft title="DETALHES" name="Jake Peralta"/>
				  }} 
			/>
		</Stack.Navigator>
	);
}
export default RootHistoric