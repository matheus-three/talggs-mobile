import * as React from 'react';
import { View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import RootCoupons from './RootCoupons';
import RootPoints from './RootPoints'
import RootHistoric from './RootHistoric'
import RootPerfil from './RootPerfil'
import RootLogoff from './RootLogoff'

const Tab = createBottomTabNavigator();
	const RootTabMenu = () => {
		return (
		<Tab.Navigator
			initialRouteName="Histórico"
			
			tabBarOptions={{
				activeTintColor: "#A7E4F2",
				inactiveTintColor: "#F7F6EE",
				labelStyle: {
					height: 20,
				},
				style: {
					height: 60,
					paddingBottom: 0,
					backgroundColor: "#101D25",
					borderTopWidth: 0,		
				}
			}}>
						
			<Tab.Screen 
				name="Cupons" 
				component={RootCoupons} 
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'ios-pricetags'} size={size} color={color} />
					)
				}}
			/>
			<Tab.Screen 
				name="Pontos" 
				component={RootPoints} 
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'md-star-outline'} size={size} color={color} />
					)
				}}
			/>
			<Tab.Screen 
				name="Histórico" 
				component={RootHistoric} 
				options={{ 
					tabBarIcon: ({ color }) => (
						<View
							style={{
								position: 'absolute',
								bottom: 0, // space from bottombar
								height: 70,
								width: 70,
								borderRadius: 58,
								backgroundColor: '#101D25',
								justifyContent: 'center',
								alignItems: 'center',
						}}>
							
							<View
								style={{
								position: 'absolute',
								bottom: 5,
								height: 60,
								width: 60,
								borderRadius: 58,
								backgroundColor: '#101D25',
								borderColor: `${color}`,
								borderWidth: 1.5,
								justifyContent: 'center',
								alignItems: 'center',
							}}>
								<Ionicons name={'ios-list-box'} size={30} color={color} />
						</View>
					  </View>
						
					)
				}}
			/>
			<Tab.Screen 
				name="Perfil" 	
				component={RootPerfil} 
				options={{
					tabBarIcon: ({ color, size }) => (
						<Ionicons name={'md-person'} size={size} color={color} />
					)
					
				}}
				
			/>
			<Tab.Screen 
				name="Fechar" 
				component={RootLogoff} 
				options={{
					tabBarIcon: ({ color, size }) =>  (
						<Ionicons name={'md-exit'} size={size} color={color} />
					)
				}}
			/>

		</Tab.Navigator>
		);
}
export default RootTabMenu
