import React from "react";
import { View, Text } from "react-native";
import SvgUri from "expo-svg-uri";
import { StyleSheet } from "react-native";

const HeaderHistoric = (props) => {
    return (
        <View>
            <View style={Style.header}>
                <SvgUri
                    width="50"
                    height="50"
                    source={require("../../../assets/Logo.svg")}
                />
                <Text style={Style.header_name}>{props.name}</Text>
            </View>
        </View>
    );
};

const Style = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 10,
    },

    header_name: {
        color: "#F7F6EE",
        marginLeft: 10,
        fontSize: 20,
    },
});

export default HeaderHistoric;
