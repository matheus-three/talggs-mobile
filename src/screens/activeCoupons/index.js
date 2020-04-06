import React, {useState} from 'react'

import { View, Text, TouchableOpacity, Clipboard, Alert, ScrollView } from 'react-native'

import SvgUri from "expo-svg-uri";

import Styles from './styles'

const activeCoupons = () => {

    const cupons =[
        {
            empresa: 'EBANX S.A',
            data: '22 Abr 2020',
            pontos: 50,
            desconto: 20,
            codigo: 'A3G7H8D9S00'
        },
        {
            empresa: 'Submarino',
            data: '21 Abr 2020',
            pontos: 100,
            desconto: 10,
            codigo: 'IJSA332W'
        },
        {
            empresa: 'Vovó Gourmet',
            data: '30 Mar 2020',
            pontos: 10,
            desconto: 3,
            codigo: 'IJSA332W'
        },
        {
            empresa: 'Luiz.com',
            data: '29 Fev 2020',
            pontos: 5000,
            desconto: 50,
            codigo: 'PPDE122'
        },
        {
            empresa: 'Tutupom?',
            data: '31 Mar 2020',
            pontos: 200,
            desconto: 10,
            codigo: 'C0MUN15M0'
        },
    ]

    const copyToClipboard = (props) => {
        Clipboard.setString(props)
        Alert.alert('Copiado')
    }

    return (
        <ScrollView>
            <View style={Styles.container}>
                <>
                    {cupons.map(cupom => (
                        <>
                            <View style={Styles.couponContainer}>
                                <View style={Styles.titleContainer}>
                                    <Text style={Styles.title} >{cupom.empresa}</Text>
                                    <Text style={Styles.data}>{cupom.data}</Text>
                                </View>

                                <View style={{marginLeft: 25}}>                              
                                    <View style={Styles.containerLine}>
                                        <Text style={Styles.itemsTitle}>Pontos: </Text>
                                        <Text style={Styles.items}>{cupom.pontos}</Text>
                                        <SvgUri fill='#F2A950' fillAll source={require('../../../assets/point_star.svg')} />
                                    </View>

                                    <View style={Styles.containerLine}>
                                        <Text style={Styles.itemsTitle}>Desconto: </Text>
                                        <Text style={Styles.items}>{cupom.desconto}%</Text>
                                    </View>

                                    <View style={Styles.containerLine}>
                                        <Text style={Styles.itemsTitle}>Código: </Text>
                                        <Text style={Styles.itemsTitle}>{cupom.codigo}</Text>
                                    </View>
                                </View>

                                <TouchableOpacity style={Styles.button} onPress={() => copyToClipboard(cupom.codigo)}>
                                    <Text style={Styles.buttonText}>COPIAR CÓDIGO</Text>
                                </TouchableOpacity>
                            </View>
                        </>
                    ))}
                </>
            </View>
        </ScrollView>
    )
}

export default activeCoupons
