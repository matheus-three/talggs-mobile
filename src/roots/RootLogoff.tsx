import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Close from '../screens/close/Close'

const Stack = createStackNavigator();
function RootLogoff() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Fechar" component={Close} />
    </Stack.Navigator>
  );
}
export default RootLogoff