import React, { useState } from "react";

import {
    View,
    Text,
    TouchableOpacity,
    Clipboard,
    ScrollView,
    Alert,
} from "react-native";

import Styles from "./styles";

import Ionicons from "react-native-vector-icons/Ionicons";

const PurchaseDetails = () => {
    const [empresa, setEmpresa] = useState("Ebanx S.A");
    const [valorTotal, setValorTotal] = useState("R$123,00");
    const [dataEmissao, setDataEmissao] = useState("24 fev 2020");
    const [dataVencimento, setDataVencimento] = useState("20 mar 2020");
    const [pontos, setPontos] = useState("20");
    const [parcelas, setParcelas] = useState("2");
    const [codigo, setCodigo] = useState("445566778899101011111212");

    const produtos = [
        {
            descricao: "Caneta Bic",
            qtde: 3,
            vlUnit: 1.99,
            vlTotal: 5.97,
        },
        {
            descricao: "Caderno do Naruto",
            qtde: 1,
            vlUnit: 20,
            vlTotal: 20,
        },
        {
            descricao: "Mochila da Barbie",
            qtde: 1,
            vlUnit: 100,
            vlTotal: 100,
        },
        {
            descricao: "Kunai",
            qtde: 1,
            vlUnit: 100,
            vlTotal: 100,
        },
    ];

    const copyToClipboard = () => {
        Clipboard.setString(codigo);
        Alert.alert("Copiado");
    };

    return (
        <ScrollView style={Styles.container}>
            <View style={Styles.containerInfos}>
                <Text style={Styles.companyName}>{empresa}</Text>
                <Text style={Styles.totalPrice}>{valorTotal}</Text>
            </View>

            <View style={Styles.containerTitle}>
                <Text style={Styles.title}>Emissão</Text>
                <Text style={Styles.title}>Vencimento</Text>
            </View>

            <View style={Styles.containerInfos}>
                <Text style={Styles.infos}>{dataEmissao}</Text>
                <Text style={Styles.infos}>{dataVencimento}</Text>
            </View>

            <View style={Styles.containerLine}>
                <Text style={Styles.title}>Pontos adquiridos: </Text>
                <Text style={Styles.totalPoints}>{pontos}</Text>
                <Ionicons
                    style={Styles.star}
                    name={"md-star-outline"}
                    size={25}
                    color={"#f2a950"}
                />
            </View>

            <View style={Styles.containerLine}>
                <Text style={Styles.title}>Nº de parcelas: </Text>
                <Text style={Styles.totalInstallments}>{parcelas}</Text>
            </View>

            <View>
                <Text style={Styles.title}>Código de barras: </Text>
                <Text style={Styles.infos}>{codigo}</Text>
                <TouchableOpacity
                    style={Styles.button}
                    onPress={() => copyToClipboard()}
                >
                    <Text style={Styles.buttonText}>COPIAR CÓDIGO</Text>
                </TouchableOpacity>
            </View>

            <View>
                <Text style={Styles.title}>Produtos </Text>

                <View style={Styles.containerItems}>
                    <Text style={Styles.productTitle}>Descrição</Text>
                    <Text style={Styles.productTitle}>Qtde.</Text>
                    <Text style={Styles.productTitle}>VL uni.</Text>
                    <Text style={Styles.productTitle}>VL. total</Text>
                </View>
                <View style={Styles.containerItems}>
                    <>
                        {produtos.map((produto) => (
                            <>
                                <Text style={Styles.productItemsDesc}>
                                    {produto.descricao}
                                </Text>
                                <Text style={Styles.productItems}>
                                    {produto.qtde}
                                </Text>
                                <Text style={Styles.productItems}>
                                    {produto.vlUnit}
                                </Text>
                                <Text style={Styles.productItems}>
                                    {produto.vlTotal}
                                </Text>
                            </>
                        ))}
                    </>
                </View>
                <View style={Styles.extra}></View>
            </View>
        </ScrollView>
    );
};

export default PurchaseDetails;
