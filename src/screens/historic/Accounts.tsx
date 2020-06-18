import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";

import Icon from "react-native-vector-icons/Feather";

import Styles from "./styles";

import firebase from "firebase";

export const Accounts = ({ route, navigation }) => {
    const { status } = route.params;
    //Status:
    // 0 - pendente
    // 1 - pago
    // 2 - vencido

    const Boletos = [
        {
            empresa: "Submarino",
            dataEmissao: "28 jun 2020",
            dataVencimento: "01 jul 2020",
            valor: "125,7",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 0,
            id: "1",
            produtos: [
                {
                    descricao: "Caneta Bic",
                    qtde: 3,
                    vlUnit: "1.9",
                    vlTotal: "5.7",
                },
                {
                    descricao: "Caderno do Naruto",
                    qtde: 1,
                    vlUnit: "20,0",
                    vlTotal: "20,0",
                },
                {
                    descricao: "Mochila da Barbie",
                    qtde: 1,
                    vlUnit: "100,0",
                    vlTotal: "100,0",
                },
            ],
        },
        {
            empresa: "Vovó Gourmet",
            dataEmissao: "25 jun 2020",
            dataVencimento: "25 jun 2020",
            valor: "399,0",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 0,
            id: "2",
            produtos: [
                {
                    descricao: "Bolo 10kg",
                    qtde: 1,
                    vlUnit: "399,0",
                    vlTotal: "399,0",
                },
            ],
        },
        {
            empresa: "Uaat?",
            dataEmissao: "18 jun 2020",
            dataVencimento: "18 jun 2020",
            valor: "58,9",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 2,
            id: "5",
            produtos: [
                {
                    descricao: "Copo Retrátil",
                    qtde: 1,
                    vlUnit: "24,9",
                    vlTotal: "24,9",
                },
                {
                    descricao: "Garrafa Retrátil",
                    qtde: 1,
                    vlUnit: "34,0",
                    vlTotal: "34,0",
                },
            ],
        },
        {
            empresa: "Extra",
            dataEmissao: "17 jun 2020",
            dataVencimento: "30 jun 2020",
            valor: "189.9",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 0,
            id: "6",
            produtos: [
                {
                    descricao: "Cobertor da Frozen",
                    qtde: 2,
                    vlUnit: "94,5",
                    vlTotal: "189.9",
                },
            ],
        },
        {
            empresa: "Saraiva",
            dataEmissao: "15 jun 2020",
            dataVencimento: "20 jun 2020",
            valor: "189,9",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 0,
            id: "7",
            produtos: [
                {
                    descricao: "Box Game of Thrones",
                    qtde: 1,
                    vlUnit: "189,9",
                    vlTotal: "189,9",
                },
            ],
        },
        {
            empresa: "Submarino",
            dataEmissao: "15 jun 2020",
            dataVencimento: "29 jun 2020",
            valor: "588,9",
            pontos: 25,
            parcelas: 2,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "8",
            produtos: [
                {
                    descricao: "Bola de basquete",
                    qtde: 1,
                    vlUnit: "80.9",
                    vlTotal: "80.9",
                },
                {
                    descricao: "Bicicleta",
                    qtde: 1,
                    vlUnit: "308,0",
                    vlTotal: "308,0",
                },
                {
                    descricao: "Patins",
                    qtde: 2,
                    vlUnit: "100,0",
                    vlTotal: "200,0",
                },
            ],
        },
        {
            empresa: "Americanas",
            dataEmissao: "18 jun 2020",
            dataVencimento: "20 jun 2020",
            valor: "289,8",
            pontos: 25,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "9",
            produtos: [
                {
                    descricao: "Box Harry Potter",
                    qtde: 1,
                    vlUnit: "199.9",
                    vlTotal: "199,9",
                },
                {
                    descricao: "Caderno do Naruto",
                    qtde: 1,
                    vlUnit: "89,9",
                    vlTotal: "89,9",
                },
            ],
        },
        {
            empresa: "Renner",
            dataEmissao: "14 jun 2020",
            dataVencimento: "16 jun 2020",
            valor: "399,8",
            pontos: 25,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 2,
            id: "10",
            produtos: [
                {
                    descricao: "Converse Branco",
                    qtde: 1,
                    vlUnit: "199.9",
                    vlTotal: "199.9",
                },
                {
                    descricao: "Converse Amarelo",
                    qtde: 1,
                    vlUnit: "199.9",
                    vlTotal: "199.9",
                },
            ],
        },
        {
            empresa: "Submarino",
            dataEmissao: "07 jun 2020",
            dataVencimento: "15 jun 2020",
            valor: "185,9",
            pontos: 25,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "11",
            produtos: [
                {
                    descricao: "Vestido da frozen",
                    qtde: 3,
                    vlUnit: "110.9",
                    vlTotal: "110,9",
                },
                {
                    descricao: "Boné do Pateta",
                    qtde: 1,
                    vlUnit: "75,0",
                    vlTotal: "75,0",
                },
            ],
        },
        {
            empresa: "Americanas",
            dataEmissao: "07 jun 2020",
            dataVencimento: "09 jun 2020",
            valor: "229,9",
            pontos: 15,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "12",
            produtos: [
                {
                    descricao: "Kindle",
                    qtde: 1,
                    vlUnit: "229.9",
                    vlTotal: "229,9",
                },
            ],
        },
        {
            empresa: "Submarino",
            dataEmissao: "01 jun 2020",
            dataVencimento: "05 jun 2020",
            valor: "279,9",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            id: "14",
            status: 1,
            produtos: [
                {
                    descricao: "Colcha de casal",
                    qtde: 1,
                    vlUnit: "199.9",
                    vlTotal: "199,9",
                },
                {
                    descricao: "Travesseiro",
                    qtde: 2,
                    vlUnit: "40,0",
                    vlTotal: "80,0",
                },
            ],
        },
        {
            empresa: "Renner",
            dataEmissao: "28 mai 2020",
            dataVencimento: "31 mai 2020",
            valor: "159,8",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "15",
            produtos: [
                {
                    descricao: "Calça jeans 48",
                    qtde: 2,
                    vlUnit: "79.9",
                    vlTotal: "159.8",
                },
            ],
        },
        {
            empresa: "Americanas",
            dataEmissao: "14 mai 2020",
            dataVencimento: "21 mai 2020",
            valor: "1200,0",
            pontos: 55,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "16",
            produtos: [
                {
                    descricao: "Moto G8",
                    qtde: 1,
                    vlUnit: "1200,0",
                    vlTotal: "1200.0",
                },
            ],
        },
        {
            empresa: "Renner",
            dataEmissao: "21 mai 2020",
            dataVencimento: "27 mai 2020",
            valor: "449,9",
            pontos: 25,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 2,
            id: "18",
            produtos: [
                {
                    descricao: "Calça xadrez",
                    qtde: 1,
                    vlUnit: "99,9",
                    vlTotal: "99,9",
                },
                {
                    descricao: "Casaco de inverno amarelo",
                    qtde: 1,
                    vlUnit: "200.0",
                    vlTotal: "200.0",
                },
                {
                    descricao: "Touca e luvas",
                    qtde: 1,
                    vlUnit: "50,0",
                    vlTotal: "50,0",
                },
                {
                    descricao: "Bota rosa",
                    qtde: 1,
                    vlUnit: "100,0",
                    vlTotal: "100,0",
                },
            ],
        },
        {
            empresa: "Submarino",
            dataEmissao: "05 mai 2020",
            dataVencimento: "12 mai 2020",
            valor: "305,7",
            pontos: 15,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "20",
            produtos: [
                {
                    descricao: "Jogo de xícaras",
                    qtde: 2,
                    vlUnit: "19.99",
                    vlTotal: "39.8",
                },
                {
                    descricao: "Jogo de panelas",
                    qtde: 1,
                    vlUnit: "200,0",
                    vlTotal: "200,0",
                },
                {
                    descricao: "Conjunto de pratos",
                    qtde: 1,
                    vlUnit: "65.9",
                    vlTotal: "65.9",
                },
            ],
        },
        {
            empresa: "Americanas",
            dataEmissao: "28 abr 2020",
            dataVencimento: "30 abr 2020",
            valor: "269.0",
            pontos: 25,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "21",
            produtos: [
                {
                    descricao: "Pantufa Scooby-Doo",
                    qtde: 3,
                    vlUnit: "120,0",
                    vlTotal: "120,0",
                },
                {
                    descricao: "Pantufa Monstro",
                    qtde: 3,
                    vlUnit: "149,0",
                    vlTotal: "149,0",
                },
            ],
        },
        {
            empresa: "Submarino",
            dataEmissao: "01 abr 2020",
            dataVencimento: "07 abr 2020",
            valor: "199,9",
            pontos: 15,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "22",
            produtos: [
                {
                    descricao: "Ukulele Shelby",
                    qtde: 1,
                    vlUnit: "199,9",
                    vlTotal: "199,9",
                },
            ],
        },
        {
            empresa: "Americanas",
            dataEmissao: "15 abr 2020",
            dataVencimento: "20 abr 2020",
            valor: "79,9",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 2,
            id: "23",
            produtos: [
                {
                    descricao: "Box: Para todos os garotos que ja amei",
                    qtde: 1,
                    vlUnit: "79,9",
                    vlTotal: "79,9",
                },
            ],
        },
        {
            empresa: "Extra",
            dataEmissao: "25 mar 2020",
            dataVencimento: "25 mar 2020",
            valor: "39,0",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 2,
            id: "2",
            produtos: [
                {
                    descricao: "Livro Dona Benta",
                    qtde: 1,
                    vlUnit: "39,0",
                    vlTotal: "39,0",
                },
            ],
        },
    ];

    const accountIconPending = (
        <Icon name="shopping-bag" size={20} color="#2D9AA6" />
    );
    const accountIconPaid = (
        <Icon name="shopping-bag" size={20} color="#34AF2B" />
    );
    const accountIconVanquished = (
        <Icon name="shopping-bag" size={20} color="#D45454" />
    );

    return (
        <ScrollView>
            <View style={Styles.container}>
                {Boletos.map((boleto) => (
                    <TouchableOpacity
                        key={boleto.id}
                        onPress={() =>
                            navigation.navigate("PurchaseDetails", {
                                boleto,
                            })
                        }
                    >
                        <View style={{ flexDirection: "row", width: "90%" }}>
                            {boleto.status === status && status === 0 ? (
                                <>{accountIconPending}</>
                            ) : boleto.status === status && status === 1 ? (
                                <>{accountIconPaid}</>
                            ) : boleto.status === status && status === 2 ? (
                                <>{accountIconVanquished}</>
                            ) : undefined}
                            {boleto.status === status && status === 0 ? (
                                <View style={Styles.containerLine}>
                                    <Text style={Styles.title}>
                                        {boleto.empresa}
                                    </Text>
                                    <Text style={Styles.date}>
                                        {boleto.dataEmissao}
                                    </Text>
                                </View>
                            ) : boleto.status === status && status === 1 ? (
                                <View style={Styles.containerLine}>
                                    <Text style={Styles.title}>
                                        {boleto.empresa}
                                    </Text>
                                    <Text style={Styles.date}>
                                        {boleto.dataEmissao}
                                    </Text>
                                </View>
                            ) : boleto.status === status && status === 2 ? (
                                <View style={Styles.containerLine}>
                                    <Text style={Styles.title}>
                                        {boleto.empresa}
                                    </Text>
                                    <Text style={Styles.date}>
                                        {boleto.dataEmissao}
                                    </Text>
                                </View>
                            ) : undefined}
                        </View>
                        {boleto.status === status && status === 0 ? (
                            <View style={Styles.valueContainerPendente}>
                                <Text style={Styles.value}>
                                    R${boleto.valor}
                                </Text>
                            </View>
                        ) : boleto.status === status && status === 1 ? (
                            <View style={Styles.valueContainerPago}>
                                <Text style={Styles.value}>
                                    R${boleto.valor}
                                </Text>
                            </View>
                        ) : boleto.status === status && status === 2 ? (
                            <View style={Styles.valueContainerVencido}>
                                <Text style={Styles.value}>
                                    R${boleto.valor}
                                </Text>
                            </View>
                        ) : undefined}
                    </TouchableOpacity>
                ))}
            </View>
        </ScrollView>
    );
};

export default Accounts;
