import React, { useState } from 'react'

import { View, Text, TouchableOpacity, Clipboard, Button, Alert } from 'react-native'

import Styles from './styles'

import SvgUri from "expo-svg-uri";

const PurchaseDetails = () => {
    const [empresa, setEmpresa] = useState('Ebanx S.A')
    const [valorTotal, setValorTotal] = useState('R$123,00')
    const [dataEmissao, setDataEmissao] = useState('24 fev 2020')
    const [dataVencimento, setDataVencimento] = useState('20 mar 2020')
    const [pontos, setPontos] = useState('20')
    const [parcelas, setParcelas] = useState('0')
    const [codigo, setCodigo] = useState('445566778899101011111212')

    const copyToClipboard = () => {
        Clipboard.setString(codigo)
        Alert.alert("Copiado")
    }

    return (
        <View style={Styles.container}>
            <View style={Styles.containerInfos}>
                <Text style={Styles.companyName}>
                    {empresa}
                </Text>
                <Text style={Styles.totalPrice}>
                    {valorTotal}
                </Text>
            </View>

            <View style={Styles.containerTitle}>
                <Text style={Styles.title}>
                    Emissão
                </Text>
                <Text style={Styles.title}>
                    Vencimento
                </Text>
            </View>

            <View style={Styles.containerInfos}>
                <Text style={Styles.infos}>
                    {dataEmissao}
                </Text>
                <Text style={Styles.infos}>
                    {dataVencimento}
                </Text>
            </View>

            <View style={Styles.containerLine}>
                <Text style={Styles.title}>Pontos adquiridos: </Text>
                <Text style={Styles.totalPoints}>
                    {pontos}
                </Text>
                <SvgUri fill='#F2A950' fillAll source={require('../../../assets/point_star.svg')} />
            </View>

            <View style={Styles.containerLine}>
                <Text style={Styles.title}>Nº de parcelas: </Text>
                <Text style={Styles.infos}>
                    {parcelas}
                </Text>
            </View>

            <View>
                <Text style={Styles.title}>Código de barras: </Text>
                <Text style={Styles.infos}>
                    {codigo}
                </Text >
                <TouchableOpacity style={Styles.button} onPress={() => copyToClipboard()}>
                    <Text style={Styles.buttonText} >COPIAR</Text>
                </TouchableOpacity>
            </View>

            <View >
                <Text style={Styles.title}>Produtos </Text>

                <View style={Styles.containerInfos}>
                    <Text style={ Styles.productTitle}>Descrição</Text>
                    <Text style={Styles.productTitle}>Qtde.</Text>
                    <Text style={Styles.productTitle}>VL uni.</Text>
                    <Text style={Styles.productTitle}>VL. total</Text>                             
                </View>
            </View>



        </View>
    )

}

export default PurchaseDetails