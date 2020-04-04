import React from 'react';
import { View } from 'react-native';

import Register from './src/screens/register/Register';
import Perfil_Edit from './src/screens/perfil_edit/Perfil_Edit'

import Login from './src/screens/login'

export default function App() {
  return (
    <View>
      <Perfil_Edit/>
    </View>
  );
}
