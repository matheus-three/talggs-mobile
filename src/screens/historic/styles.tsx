import { StyleSheet } from "react-native";
import Constants from "expo-constants";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#F7F6EE",
        height: "100%",
        paddingHorizontal: "3%",
        paddingTop: 10,
    },
    containerLine: {
        width: "100%",
        marginLeft: "7.9%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    title: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#101D25",
    },
    date: {
        fontSize: 12,
        fontWeight: "bold",
        color: "#A4A4A7",
    },
    value: {
        marginLeft: "10%",
        fontSize: 16,
        color: "#101D25",
    },
    valueContainerPendente: {
        marginLeft: 9,
        borderLeftWidth: 1.5,
        paddingBottom: 20,
        borderLeftColor: "#2D9AA6",
    },
    valueContainerPago: {
        marginLeft: 9,
        borderLeftWidth: 1.5,
        paddingBottom: 20,
        borderLeftColor: "#34AF2B",
    },
    valueContainerVencido: {
        marginLeft: 9,
        borderLeftWidth: 1.5,
        paddingBottom: 20,
        borderLeftColor: "#D45454",
    },
});

export default styles;
