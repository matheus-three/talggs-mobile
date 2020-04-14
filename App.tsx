import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import BeforeScreen from './src/BeforeScreen'
import RootLogin from './src/roots/RootLogin'
import RootTabMenu from './src/roots/RootTabMenu'

import { AuthContext }  from './src/Context'

export default () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [userToken, setUserToken] = React.useState(null); //se por um nome, iniciará para o home, se por null vai para tela login

  const authContext = React.useMemo(() => {
    return {
      signIn: () => {
        setIsLoading(false);
        setUserToken("amanda");
      },
      signUp: () => {
        setIsLoading(false);
        setUserToken("amanda");
      },
      signOut: () => {
        setIsLoading(false);
        setUserToken(null);
      },
    };
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  if (isLoading) {
    return <BeforeScreen/>
  }

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {userToken ? (
          <RootTabMenu/> 
        ) : (
          <RootLogin/>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};




