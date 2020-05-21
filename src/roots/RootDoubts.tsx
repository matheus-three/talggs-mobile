import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Doubts from "../screens/doubts/Doubts";

import Header from "../components/header/Header";

const Stack = createStackNavigator();
function RootDoubts() {
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
                        <Header title="DÚVIDAS" name="Jake Peralta" />
                    ),
                }}
            />
        </Stack.Navigator>
    );
}
export default RootDoubts;
