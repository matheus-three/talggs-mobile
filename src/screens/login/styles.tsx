import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: "#232F40",
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
        width: "100%",
    },
    text: {
        marginTop: 30,
        color: "#f2a950",
        fontSize: 12,
    },
    inputMargin: {
        marginBottom: 33,
    },
    input: {
        width: "80%",
        paddingLeft: 35,
        color: "#F7F6EE",
        borderBottomColor: "#F7F6EE",
        borderBottomWidth: 1,
    },
    error: {
        fontSize: 10,
        color: "#E52A2A",
        marginTop: 5,
        marginBottom: 33,
    },
});

export default styles;
