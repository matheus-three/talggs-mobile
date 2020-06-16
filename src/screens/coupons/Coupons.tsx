import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Clipboard,
    ScrollView,
    Alert
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Styles from "./styles";

import firebase from "firebase";

import "@firebase/firestore";

const Coupons = () => {
    const [cupons, setCupons] = useState([]);

    const getCoupons = async () => {
        const dbh = firebase.firestore();

        const reportRef = dbh.collection("cupons-gerados-mob").doc("J6SYs73OJnToht1w9jSM");

        reportRef.get().then((report) => {
            const data = report.data();

            console.log("Data", data.gerados);

            setCupons(data.gerados);
        });
    };

    useEffect(() => {
        getCoupons();
    }, []);

    // const cupons = [
    //     {
    //         empresa: "EBANX S.A",
    //         data: "22 Abr 2020",
    //         pontos: 50,
    //         desconto: 20,
    //         codigo: "A3G7H8D9S00",
    //         id: "1",
    //     },
    //     {
    //         empresa: "Submarino",
    //         data: "21 Abr 2020",
    //         pontos: 100,
    //         desconto: 10,
    //         codigo: "IJSA332W",
    //         id: "2",
    //     },
    //     {
    //         empresa: "Vovó Gourmet",
    //         data: "30 Mar 2020",
    //         pontos: 10,
    //         desconto: 3,
    //         codigo: "IJSA332W",
    //         id: "3",
    //     },
    //     {
    //         empresa: "Luiz.com",
    //         data: "29 Fev 2020",
    //         pontos: 5000,
    //         desconto: 50,
    //         codigo: "PPDE122",
    //         id: "4",
    //     },
    //     {
    //         empresa: "Tutupom?",
    //         data: "31 Mar 2020",
    //         pontos: 200,
    //         desconto: 10,
    //         codigo: "C0MUN15M0",
    //         id: "5",
    //     },
    // ];

    const copyToClipboard = (props) => {
        Clipboard.setString(props);
        Alert.alert('Código copiado!')
    };

    return (
        <ScrollView style={{ backgroundColor: "#232F40" }}>
            <View style={Styles.container}>
                <>
                    {cupons.map((cupom) => (
                        <>
                            <View style={Styles.couponContainer}>
                                <View style={Styles.titleContainer}>
                                    <Text style={Styles.title}>
                                        {cupom.nameCompany}
                                    </Text>
                                    <Text style={Styles.data}>
                                        {cupom.deadline}
                                    </Text>
                                </View>

                                <View style={{ marginLeft: 25 }}>
                                    <View style={Styles.containerLine}>
                                        <Text style={Styles.itemsTitle}>
                                            Pontos:{" "}
                                        </Text>
                                        <Text style={Styles.items}>
                                            {cupom.points}
                                        </Text>
                                        <Ionicons
                                            style={Styles.star}
                                            name={"md-star-outline"}
                                            size={25}
                                            color={"#f2a950"}
                                        />
                                    </View>

                                    <View style={Styles.containerLine}>
                                        <Text style={Styles.itemsTitle}>
                                            Desconto:{" "}
                                        </Text>
                                        <Text style={Styles.items}>
                                            {cupom.discount}%
                                        </Text>
                                    </View>

                                    <View style={Styles.containerLine}>
                                        <Text style={Styles.itemsTitle}>
                                            Código:{" "}
                                        </Text>
                                        <Text style={Styles.itemsTitle}>
                                            {cupom.codeCompany}
                                        </Text>
                                    </View>
                                </View>

                                <TouchableOpacity
                                    style={Styles.button}
                                    onPress={() =>
                                        copyToClipboard(cupom.codeCompany)
                                    }
                                >
                                    <Text style={Styles.buttonText}>
                                        COPIAR CÓDIGO
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    ))}
                </>
                <View style={{ marginBottom: 22 }}></View>
            </View>
        </ScrollView>
    );
};

export default Coupons;
