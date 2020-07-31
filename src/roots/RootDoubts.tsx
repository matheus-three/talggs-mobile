import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Doubts from "../screens/doubts/Doubts";

import Header from "../components/header/Header";

import firebase from "firebase";

const Stack = createStackNavigator();
function RootDoubts() {
    var user = firebase.auth().currentUser;

    const getName = () => {
        if (user.displayName != null) return user.displayName;

        return "";
    };


    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Dúvidas"
                component={Doubts}
                options={{
                    title: "Dúvidas",
                    headerStyle: {
                        backgroundColor: "#101D25",
                        height: 140,
                    },

                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerTitle: (props) => (
                        <Header title="DÚVIDAS" name={getName()} />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}
export default RootDoubts;
