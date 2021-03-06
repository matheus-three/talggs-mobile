import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Coupons from "../screens/coupons/Coupons";

import Header from "../components/header/Header";

import firebase from "firebase";

const Stack = createStackNavigator();
function RootCoupons() {
    var user = firebase.auth().currentUser;

    const getName = () => {
        if (user.displayName != null) return user.displayName;

        return "";
    };

    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Cupons"
                component={Coupons}
                options={{
                    title: "Cupons",
                    headerStyle: {
                        backgroundColor: "#101D25",
                        height: 140,
                    },

                    headerTitleStyle: {
                        fontWeight: "bold",
                    },
                    headerTitle: (props) => (
                        <Header title="CUPONS" name={getName()} />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}

export default RootCoupons;
