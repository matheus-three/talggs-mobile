import React from 'react';
import { View, Text } from 'react-native';

import Register from './src/screens/register/Register';
import Perfil_Edit from './src/screens/perfil_edit/Perfil_Edit'
import Perfil from './src/screens/perfil/Perfil'

import Style from './style'

import Login from './src/screens/login'

export default function App() {
  return (
    <View>
      <View style={Style.statusBar}></View>
      <Register/>
    </View>
  );
}
