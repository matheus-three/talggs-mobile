import * as React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

import Accounts from './Accounts'

export const HistoricTabMenu =  () => {
  return (
    <Tab.Navigator
        initialRouteName="Account"
    
        tabBarOptions={{
            activeTintColor: '#A7E4F2',
            inactiveTintColor: '#F7F6EE',
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
            component={Accounts} 
            options={{ tabBarLabel: 'Pendentes'}}
            initialParams={{ status: 0}}
        />
        <Tab.Screen 
            name="OverdueAccount" 
            component={Accounts} 
            options={{ tabBarLabel: 'Atrasados' }}
            initialParams={{ status: 2}}
        />
        <Tab.Screen 
            name="PaidAccount" 
            component={Accounts} 
            options={{ tabBarLabel: 'Pagos' }}
            initialParams={{ status: 1}}
        />
    </Tab.Navigator>
  );
}

export default HistoricTabMenu

