import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Clipboard,
    ScrollView,
    Alert,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import Styles from "./styles";

import firebase from "firebase";

import "@firebase/firestore";

const Coupons = () => {
    const [cupons, setCupons] = useState([]);

    const getCoupons = async () => {
        const snapshot = await firebase
            .firestore()
            .collection("cupons-gerados-mob")
            .get();
        const items = snapshot.docs.map((doc) => doc.data());

        return items;
    };

    useEffect(() => {
        async function getItems() {
            const items = await getCoupons();
            if(!!!cupons.length) setCupons(items);
        }

        getItems();
    });

    const copyToClipboard = (cod, index) => {
        Clipboard.setString(cod);

        Alert.alert("Código copiado!");

        const newCupons = cupons.filter((cupom, i) => index !== i );

        setCupons(newCupons);
    };

    return (
        <ScrollView style={{ backgroundColor: "#232F40" }}>
            <View style={Styles.container}>
                <>
                    {cupons.map((cupom, index) => (
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
                                        copyToClipboard(cupom.codeCompany, index)
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
