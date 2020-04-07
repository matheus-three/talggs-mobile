import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import PendingAccount from './PendingAccount'
import PaidAccount from './PaidAccount'
import OverdueAccount from './OverdueAccount'

export const Historic =  () => {
  return (
    <Tab.Navigator
        initialRouteName="PendingAccount"
    
        tabBarOptions={{
            activeTintColor: '#A7E4F2',
            inactiveTintColor: 'white',
            indicatorStyle: {
                backgroundColor: '#A7E4F2',
                height: 2,
            },
            style: { 
                backgroundColor: '#101D25',
            },
        }}
    >
        <Tab.Screen 
            name="PendingAccount" 
            component={PendingAccount} 
            options={{ tabBarLabel: 'Pendentes' }}
        />
        <Tab.Screen 
            name="OverdueAccount" 
            component={OverdueAccount} 
            options={{ tabBarLabel: 'Vencidas' }}
        />
        <Tab.Screen 
            name="PaidAccount" 
            component={PaidAccount} 
            options={{ tabBarLabel: 'Pagas' }}
        />
    </Tab.Navigator>
  );
}

export default Historic


