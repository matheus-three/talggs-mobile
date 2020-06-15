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
            status: 1,
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
            empresa: "São João",
            dataEmissao: "18 jun 2020",
            dataVencimento: "30 jun 2020",
            valor: "199.9",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 0,
            id: "4",
            produtos: [
                {
                    descricao: "Recarga de cartão",
                    qtde: 1,
                    vlUnit: "199.9",
                    vlTotal: "199.9",
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
            id: "8",
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
            empresa: "Mercado Livre",
            dataEmissao: "17 jun 2020",
            dataVencimento: "30 jun 2020",
            valor: "189.9",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 0,
            id: "9",
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
            id: "10",
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
            empresa: "Centauro",
            dataEmissao: "15 jun 2020",
            dataVencimento: "29 jun 2020",
            valor: '588,9',
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 0,
            id: "11",
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
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "12",
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
            empresa: "Netshoes",
            dataEmissao: "14 jun 2020",
            dataVencimento: "16 jun 2020",
            valor: "399,8",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 2,
            id: "13",
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
            empresa: "Disney",
            dataEmissao: "07 jun 2020",
            dataVencimento: "15 jun 2020",
            valor: "185,9",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "14",
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
            empresa: "Amazon",
            dataEmissao: "07 jun 2020",
            dataVencimento: "09 jun 2020",
            valor: "229,9",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "15",
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
            empresa: "CVC",
            dataEmissao: "07 jun 2020",
            dataVencimento: "12 jun 2020",
            valor: "22000,0",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 2,
            id: "16",
            produtos: [
                {
                    descricao: "Pacote NY",
                    qtde: 2,
                    vlUnit: "11000,0",
                    vlTotal: "22000,00",
                },
            ],
        },
        {
            empresa: "Pernambucanas",
            dataEmissao: "01 jun 2020",
            dataVencimento: "05 jun 2020",
            valor: '279,9',
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            id: "17",
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
            empresa: "Riachuelo",
            dataEmissao: "28 mai 2020",
            dataVencimento: "31 mai 2020",
            valor: "159,8",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "18",
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
            empresa: "C&A",
            dataEmissao: "14 mai 2020",
            dataVencimento: "21 mai 2020",
            valor: "1200,0",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "19",
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
            empresa: "Leroy Merlin",
            dataEmissao: "21 mai 2020",
            dataVencimento: "29 mai 2020",
            valor: "89,7",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 2,
            id: "20",
            produtos: [
                {
                    descricao: "Vaso G",
                    qtde: 3,
                    vlUnit: "29,9",
                    vlTotal: "89,7",
                },
            ],
        },
        {
            empresa: "SHEIN",
            dataEmissao: "21 mai 2020",
            dataVencimento: "27 mai 2020",
            valor: "449,9",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 2,
            id: "21",
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
            empresa: "Aliexpress",
            dataEmissao: "15 mai 2020",
            dataVencimento: "20 mai 2020",
            valor: "143,5",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            id: "22",
            status: 2,
            produtos: [
                {
                    descricao: "Lip balm",
                    qtde: 3,
                    vlUnit: "1,9",
                    vlTotal: "5,7",
                },
                {
                    descricao: "Máscara gelada",
                    qtde: 1,
                    vlUnit: "89,8",
                    vlTotal: "89,8",
                },
                {
                    descricao: "Paleta de sombras",
                    qtde: 1,
                    vlUnit: "38,0",
                    vlTotal: "38,0",
                },
                {
                    descricao: "Máscara coreana",
                    qtde: 1,
                    vlUnit: "10,0",
                    vlTotal: "10,0",
                },
            ],
        },
        {
            empresa: "Submarino",
            dataEmissao: "05 mai 2020",
            dataVencimento: "12 mai 2020",
            valor: "305,7",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "23",
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
            empresa: "Zona Criativa",
            dataEmissao: "28 abr 2020",
            dataVencimento: "30 abr 2020",
            valor: "269.0",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "24",
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
            valor: '199,9',
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "25",
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
            id: "26",
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
            empresa: "Natura",
            dataEmissao: "12 mar 2020",
            dataVencimento: "15 mar 2020",
            valor: "190.0",
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 2,
            id: "27",
            produtos: [
                {
                    descricao: "Coffee Seduction",
                    qtde: 2,
                    vlUnit: "80",
                    vlTotal: "160",
                },
            ],
        },
        {
            empresa: "Tutupom?",
            dataEmissao: "28 fev 2020",
            dataVencimento: "20 mar 2020",
            valor: '6.0',
            pontos: 5,
            parcelas: 1,
            codigo: "658836481416525064204870947507962756494645398805",
            status: 1,
            id: "3",
            produtos: [
                {
                    descricao: "Cactos",
                    qtde: 1,
                    vlUnit: '2,0',
                    vlTotal: '2,0',
                },
                {
                    descricao: "Suculenta",
                    qtde: 1,
                    vlUnit: '2,0',
                    vlTotal: '2,0',
                },
                {
                    descricao: "Mudas de hortelã",
                    qtde: 1,
                    vlUnit: '2,0',
                    vlTotal: '2,0',
                }
            ],
        },
    ];

    // useEffect(() => {
    //     getEmpresas();
    // });

    // const getEmpresas = () => {
    //     const dbh = firebase.firestore();

    //     const reportRef = dbh.collection("user-web");

    //     reportRef
    //         .get()
    //         .then((resp) => {
    //             resp.forEach((data) => {
    //                 getContas(data.id);
    //             });
    //         })
    //         .catch((err) => {
    //             console.log(err);
    //         });
    // };

    // const getContas = (data) => {
    //     const dbh = firebase.firestore();

    //     const reportRef = dbh;

    //     reportRef
    //         .collection("user-web")
    //         .doc(data)
    //         .collection("billet-web")
    //         .onSnapshot((doc) => {
    //             doc.forEach((accounts) => {
    //                 console.log("ACCOUNTS", accounts.data());
    //             });
    //         });
    // };

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
        <ScrollView style={Styles.container}>
            <>
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
            </>
        </ScrollView>
    );
};

export default Accounts;
