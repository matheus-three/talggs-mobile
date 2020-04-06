import React from 'react';

import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Ionicons from 'react-native-vector-icons/Ionicons';

import Perfil from './src/screens/perfil/Perfil';
import Register from './src/screens/register/Register';
import Perfil_Edit from './src/screens/perfil_edit/Perfil_Edit';

const Routes = createBottomTabNavigator(
  {
    //Defination of Navigaton bottom options
    Cupons: { screen: Perfil },
    Pontos: { screen: Register },
    Historico: { screen: Perfil_Edit },
    Editar: { screen: Perfil },
    Fechar: { screen: Perfil_Edit },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ tintColor }) => {
        const { routeName } = navigation.state;
        let IconComponent = Ionicons;
        let iconName;
        if (routeName === 'Cupons') {
          iconName = `ios-pricetags`;
          return <IconComponent name={iconName} size={25} color={tintColor} style={{marginTop: 10}}/>;
        } 
        if (routeName === 'Pontos') {
          iconName = `md-star-outline`;
          return <IconComponent name={iconName} size={28} color={tintColor} style={{marginTop: 10}} />;
        } 
        if (routeName === 'Historico') {
          iconName = `ios-list-box`;
          return <IconComponent name={iconName} size={30} color={tintColor} style={{marginBottom: 5}}/>;
        } 
        if (routeName === 'Editar') {
          iconName = `md-person`;
          return <IconComponent name={iconName} size={25} color={tintColor} style={{marginTop: 10}}/>;
        } 
        if (routeName === 'Fechar') {
          iconName = `md-exit`;
          return <IconComponent name={iconName} size={25} color={tintColor} style={{marginTop: 10}}/>;
        } 
      },
    }),
    tabBarOptions: {
      activeTintColor: '#A7E4F2',
      inactiveTintColor: '#F7F6EE',
      inactiveBackgroundColor: '#101D25',
      activeBackgroundColor: '#101D25',

      style: {
        //style do bottom tab
        height: 70,
        borderWidth: 0,
        backgroundColor: '#101D25',
        paddingBottom: 10,
        borderTopWidth: 1,
        borderTopColor: '#A7E4F2',
      },
    },
  }
);
export default createAppContainer(Routes);