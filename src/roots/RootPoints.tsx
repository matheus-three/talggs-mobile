import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Points from '../screens/points/Points'

import Header from '../components/Header'

const Stack = createStackNavigator();
function RootPoints() {
  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Pontos" 
        component={Points} 
        options={{
          title: 'Points',
          headerStyle: {
            backgroundColor: '#101D25',
            height: 140,
          },
         
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitle: props => <Header title="PONTOS" name="Jake Peralta"/>
        }}
      />
    </Stack.Navigator>
  );
}
export default RootPoints