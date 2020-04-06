import React, {useState} from  'react'

import {View, TouchableOpacity, Text} from 'react-native'

import Styles from './styles'

import History from '..'

const StatusNavigation = (props) => {
    const [accountsState, setAccountsState] = useState(0)

    const handleClickPending = () => {
        setAccountsState(0)
    } 

    const handleClickPaid = () => {
        setAccountsState(1)
    } 

    const handleClickVanquished = () => {
        setAccountsState(2)
    } 

    return (
        <View style={Styles.container}>
            <View style={Styles.containerLine}>
                
            {
                    accountsState === 0 ?
                        <>
                            <TouchableOpacity style={Styles.buttonSelected} onPress={handleClickPending} >
                                <Text style={Styles.title}>
                                    Pendentes
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.button} onPress={handleClickVanquished}>
                                <Text style={Styles.title}>
                                    Vencidos
                                </Text>
                            </TouchableOpacity>
                            
                            <TouchableOpacity style={Styles.button} onPress={handleClickPaid}>
                                <Text style={Styles.title}>
                                    Pagos
                                </Text>
                            </TouchableOpacity>
                        </>
                        

                
                    :accountsState === 2 ?
                        <>
                            <TouchableOpacity style={Styles.button} onPress={handleClickPending}>
                                <Text style={Styles.title}>
                                    Pendentes
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.buttonSelected} onPress={handleClickPending} >
                                <Text style={Styles.title}>
                                    Vencidos
                                </Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={Styles.button} onPress={handleClickPaid}>
                                <Text style={Styles.title}>
                                    Pagos
                                </Text>
                            </TouchableOpacity>

                        </>

                    :accountsState === 1 ?
                        <>
                            <TouchableOpacity style={Styles.button} onPress={handleClickPending}>
                                    <Text style={Styles.title}>
                                        Pendentes
                                    </Text>
                            </TouchableOpacity>
                        
                            <TouchableOpacity style={Styles.button} onPress={handleClickVanquished}>
                                <Text style={Styles.title}>
                                    Vencidos
                                </Text>
                            </TouchableOpacity>
                        
                            <TouchableOpacity style={Styles.buttonSelected} onPress={handleClickPending} >
                                <Text style={Styles.title}>
                                    Pagos
                                </Text>
                            </TouchableOpacity>
                        </>
                    : undefined
                }
            </View>


            <View>
                <History state={accountsState}></History>
            </View>
        </View>
    )
}

export default StatusNavigation