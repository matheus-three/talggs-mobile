import React, { useState, useEffect } from "react";
import { ScrollView, Text, View, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
    Collapse,
    CollapseHeader,
    CollapseBody,
} from "accordion-collapse-react-native";

import Style from "./styles";
import firebase from "firebase";

export const Points = () => {
    const [pontos, setPontos] = useState([]);

    const updateTotalPoints = () => {
        
    };

    useEffect(() => {
        async function getItems() {
            const items = await getMarker();
            setPontos(items);
        }

        getItems();
    });

    const getMarker = async () => {
        const snapshot = await firebase
            .firestore()
            .collection("pontos-mob")
            .get();
        const items = snapshot.docs.map((doc) => doc.data());

        return items;
    };

    const chevronDown = <Icon name="chevron-down" size={25} color="#232F40" />;
    const chevronRight = (
        <Icon name="chevron-right" size={20} color="#2D4F6C" />
    );
    const star = <Ionicons name="md-star-outline" size={25} color="#f2a950" />;

    return (
        <ScrollView style={Style.scrollContainer}>
            <View style={Style.container}>
                {pontos.map((ponto) => (
                    <Collapse style={Style.couponContainer}>
                        <CollapseHeader style={Style.header}>
                            <Text style={Style.chevronRight}>
                                {chevronDown}
                            </Text>
                            <Text style={Style.title}>{ponto.nameCompany}</Text>
                            <Text style={Style.points}>
                                {ponto.totalPoints}
                                {star}
                            </Text>
                        </CollapseHeader>

                        <CollapseBody>
                            <View style={Style.containerLine}>
                                <Text style={Style.label}>Pontos</Text>
                                <Text style={Style.label}>Desconto</Text>
                            </View>

                            {ponto.pointsOption.map((item) => (
                                <TouchableOpacity
                                    style={Style.containerItems}
                                    onPress={() => {}}
                                >
                                    <View style={Style.containerLine}>
                                        <Text style={Style.items}>
                                            {item.amountPoints}
                                        </Text>
                                        <Text style={Style.items}>
                                            {item.totalDiscount}%
                                        </Text>
                                    </View>

                                    <View
                                        style={Style.containerGenerateCoupons}
                                    >
                                        <Text style={Style.generateCoupons}>
                                            Gerar cupom
                                        </Text>
                                        <Text>{chevronRight}</Text>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </CollapseBody>
                    </Collapse>
                ))}
                <View style={{ marginBottom: 35 }}></View>
            </View>
        </ScrollView>
    );
};

export default Points;
