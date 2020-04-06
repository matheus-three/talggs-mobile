import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Historic from '../screens/historic/Historic'

const Stack = createStackNavigator();
function RootHistoric() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Histórico" component={Historic} />
    </Stack.Navigator>
  );
}
export default RootHistoric