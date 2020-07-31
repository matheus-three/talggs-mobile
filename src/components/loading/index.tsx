import React from "react";
import { SkypeIndicator } from "react-native-indicators";
import { StyleSheet } from "react-native";
import { View, SafeAreaView } from "react-native";

export const Loading = (props) => {
    // methods

    const renderLoading = () => (
        <View style={Styles.container}>
            <SkypeIndicator style={Styles.charging} color="#A7E4F2" />
        </View>
    );

    // render

    return (
        <SafeAreaView>
            {props.loading ? renderLoading() : props.children}
        </SafeAreaView>
    );
};

export const Styles = StyleSheet.create({
    container: {
        height: "100%",
        backgroundColor: "#232F40",
        alignItems: "center",
        justifyContent: "center",
    },
    charging: {
        position: "absolute",
        bottom: 150,
    },
});
