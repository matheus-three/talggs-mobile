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

const PurchaseDetails = (props) => {
    const data = props.route.params.boleto;

    const [empresa, setEmpresa] = useState(data.empresa);
    const [valorTotal, setValorTotal] = useState(data.valor);
    const [dataEmissao, setDataEmissao] = useState(data.dataEmissao);
    const [dataVencimento, setDataVencimento] = useState(data.dataVencimento);
    const [pontos, setPontos] = useState(data.pontos);
    const [parcelas, setParcelas] = useState(data.parcelas);
    const [codigo, setCodigo] = useState(data.codigo);

    const copyToClipboard = () => {
        Clipboard.setString(codigo);
        Alert.alert("Copiado");
    };

    return (
        <ScrollView style={Styles.container}>
            <View style={Styles.containerInfos}>
                <Text style={Styles.companyName}>{empresa}</Text>
                <Text style={Styles.totalPrice}>R${valorTotal}</Text>
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
                        {data.produtos.map((produto) => (
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
