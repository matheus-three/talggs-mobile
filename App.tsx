import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import BeforeScreen from "./src/BeforeScreen";
import RootLogin from "./src/roots/RootLogin";
import RootTabMenu from "./src/roots/RootTabMenu";

import { AuthContext } from "./src/Context";

import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

import * as firebase from "firebase";

import "firebase/firestore";

import { YellowBox } from "react-native";
YellowBox.ignoreWarnings(["Warning: ReactNative.createElement"]);

const firebaseConfig = {
    apiKey: "AIzaSyDD8ft7kCn5S1VVRaKdR5ltlZrN221ywRs",
    authDomain: "talggs-serverless.firebaseapp.com",
    databaseURL: "https://talggs-serverless.firebaseio.com",
    projectId: "talggs-serverless",
    storageBucket: "talggs-serverless.appspot.com",
    messagingSenderId: "546999963786",
    appId: "1:546999963786:web:60a55ec8d0ed0f6a761d73",
    measurementId: "G-6P708HDSY5",
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings({ experimentalForceLongPolling: true });


export default () => {
    const [isLoading, setIsLoading] = React.useState(true);
    const [userToken, setUserToken] = React.useState(null); //se por um nome, iniciará para o home, se por null vai para tela login
    console.ignoredYellowBox = [
        'Setting a timer'
        ];
    console.disableYellowBox = true;

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
        return <BeforeScreen />;
    }

    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer>
                {userToken ? <RootTabMenu /> : <RootLogin />}
            </NavigationContainer>
        </AuthContext.Provider>
    );
};
