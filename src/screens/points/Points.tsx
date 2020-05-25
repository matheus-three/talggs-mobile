import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import Ionicons from "react-native-vector-icons/Ionicons";

import {
    Collapse,
    CollapseHeader,
    CollapseBody,
} from "accordion-collapse-react-native";

import Style from "./styles";

export const Points = () => {
    const [collapsed, setCollapsed] = useState(false);
    const pontos = [
        {
            titulo: "EBANX S.A",
            total: 80,
            opcaoPontos: [
                {
                    qtdPontos: 100,
                    totalDesconto: 20,
                },
                {
                    qtdPontos: 175,
                    totalDesconto: 25,
                },
                {
                    qtdPontos: 250,
                    totalDesconto: 30,
                },
            ],
        },
        {
            titulo: "Americanas",
            total: 30,
            opcaoPontos: [
                {
                    qtdPontos: 100,
                    totalDesconto: 20,
                },
                {
                    qtdPontos: 350,
                    totalDesconto: 30,
                },
            ],
        },

        {
            titulo: "Submarino",
            total: 200,
            opcaoPontos: [
                {
                    qtdPontos: 1000,
                    totalDesconto: 50,
                },
            ],
        },
    ];

    const chevronDown = <Icon name="chevron-down" size={25} color="#232F40" />;
    const chevronRight = <Icon name="chevron-right" size={25} color="#232F40" />;
    const star = <Ionicons name="md-star-outline" size={30} color="#f2a950" />;

    return (
        <ScrollView style={Style.scrollContainer}>
            <View style={Style.container}>
                {pontos.map((ponto) => (
                    <Collapse style={Style.couponContainer}>
                        <CollapseHeader style={Style.header}>
                            <Text style={Style.chevronRight}>
                                {chevronDown}
                            </Text>
                            <Text style={Style.title}>{ponto.titulo}</Text>
                            <Text style={Style.points}>
                                {ponto.total}
                                {star}
                            </Text>
                        </CollapseHeader>

                        <CollapseBody>
                            <View style={Style.containerLine}>
                                <Text style={Style.label}>Pontos</Text>
                                <Text style={Style.label}>Desconto</Text>
                            </View>

                            {ponto.opcaoPontos.map((item) => (
                                <View style={Style.containerItems}>
                                    <View style={Style.containerLine}>
                                        <Text style={Style.items}>
                                            {item.qtdPontos}
                                        </Text>
                                        <Text style={Style.items}>
                                            {item.totalDesconto}%
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
                                </View>
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
