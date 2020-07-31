import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Points from "../screens/points/Points";

import Header from "../components/header/Header";

import firebase from "firebase";
import { useState } from "react";
import { getActionFromState } from "@react-navigation/native";

const Stack = createStackNavigator();
function RootPoints() {
    var user = firebase.auth().currentUser;

    const getName = () => {
        if (user.displayName != null) return user.displayName;

        return "";
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Pontos"
                component={Points}
                options={{
                    title: "Points",
                    headerStyle: {
                        backgroundColor: "#101D25",
                        height: 140,
                    },

                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerTitle: (props) => (
                        <Header title="PONTOS" name={() => getName()} />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}
export default RootPoints;
