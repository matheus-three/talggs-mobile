import React, {useState} from 'react'
import { View, Text, ScrollView } from 'react-native'

import Styles from './styles'

const History = () => {

    //Status: 0 - pendente 1 - pago 2 - vencido
    const Boletos =[
        {
            empresa: 'EBANX S.A',
            data: '22 Abr 2020',
            valor: 50.00,
            status: 0,
        },
        {
            empresa: 'Submarino',
            data: '21 Abr 2020',
            valor: 100.00,
            status: 0,
        },
        {
            empresa: 'Vovó Gourmet',
            data: '30 Mar 2020',
            valor: 120.00,
            status: 1,
        },
        {
            empresa: 'Luiz.com',
            data: '29 Fev 2020',
            valor: 5000.00,
            status: 1,
        },
        {
            empresa: 'Tutupom?',
            data: '31 Mar 2020',
            valor: 200.00,
            status: 2,
        },
        {
            empresa: 'São João',
            data: '31 Mar 2020',
            valor: 500.00,
            status: 2,
        },
    ]
    
    return (
        // <ScrollView>
            <View style={Styles.container}>
                <>
                    {Boletos.map(boleto => (
                        <>
                            <View style={Styles.boleto}>
                                <View style={Styles.containerLine}>
                                <Text style={Styles.title}>{boleto.empresa}</Text>
                                <Text style={Styles.date}>{boleto.data}</Text>
                                </View>
                                
                                <Text>R${boleto.valor}</Text>
                            </View>
                            
                        </>
                    ))}
                </>
            </View>
        // </ScrollView>
    )
}

export default History