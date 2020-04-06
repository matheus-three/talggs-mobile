import React, {useState} from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'

import SvgUri from "expo-svg-uri";

import Styles from './styles'

const History = (props) => {
    //Status: 0- pendente 
            // 1 - pago 
            // 2 - vencido
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
            <View style={Styles.container}>
                <>
                    {Boletos.map(boleto => (
                       
                            
                            <>
                                { boleto.status == props.state ?


                                    <View>
                                        <View style={{flexDirection: 'row', width: '90%'}}>

                                            {boleto.status == 0 ? 
                                                    <SvgUri style={{marginRight: 10}} source={require('../../../assets/boleto.svg')} />
                                                
                                                : boleto.status == 1 ?
                                                    <SvgUri style={{marginRight: 10}} fill='#34AF2B' fillAll source={require('../../../assets/boleto.svg')} />
                                                
                                                : boleto.status == 2 ?
                                                    <SvgUri style={{marginRight: 10}} fill='#D45454' fillAll source={require('../../../assets/boleto.svg')} />

                                                : undefined
                                            }
                                            
                                                <View style={Styles.containerLine}>
                                                    <Text style={Styles.title}>{boleto.empresa}</Text>
                                                    <Text style={Styles.date}>{boleto.data}</Text>
                                                </View>
                                            
                                            
                                        </View>  
                                        
                                        {boleto.status == 0 ? 
                                            <View style={Styles.valueContainerPendente}> 
                                                <Text style={Styles.value}>R${boleto.valor}</Text>
                                            </View> 

                                            :boleto.status == 1 ? 
                                            <View style={Styles.valueContainerPago}> 
                                                <Text style={Styles.value}>R${boleto.valor}</Text>
                                            </View> 

                                            : boleto.status == 2 ? 
                                            <View style={Styles.valueContainerVencido}> 
                                                <Text style={Styles.value}>R${boleto.valor}</Text>
                                            </View> 

                                            : undefined
                                        } 
                                        
                                    </View>

                                    : undefined 
                                }
                                
                            </>
                                
                    ))}
                </>
            </View>
    )
}

export default History