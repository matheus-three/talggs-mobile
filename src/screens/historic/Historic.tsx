import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { AuthContext } from '../../Context'

export const Historic = ({ navigation }) => {
  const { signOut } = React.useContext(AuthContext);
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Histórico!</Text>
      </View>
    );
}

export default Historic

