import React, { useState } from 'react';
import { View, TextInput, Text, Button, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; 

import Style from './style';

const Register = () => {

    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);
  
    const onChange = (event, selectedDate) => {
      const currentDate = selectedDate || date;
      setShow(Platform.OS === 'ios');
      setDate(event.target.value);
      //setDate(currentDate);
    };
  
    const showMode = currentMode => {
      setShow(true);
      setMode(currentMode);
    };
  
    const showDatepicker = () => {
      showMode('date');
    };
  
    return(
        <View style={Style.container}>
            <View style={Style.header}>
                <Text style={Style.header_title}>Cadastro</Text>
            </View>
                <TextInput placeholder="Nome Completo" style={Style.input}/>
                <TextInput placeholder="E-mail" style={Style.input}/>
                <TextInput placeholder="Senha" secureTextEntry style={Style.input}/>
                <TextInput placeholder="Confirme sua senha" secureTextEntry style={Style.input}/> 
                <View>
                    <Button onPress={showDatepicker} title="Data de Nascimento" />
                </View>                 
                {show && (
                    <DateTimePicker
                        testID="dateTimePicker"
                        timeZoneOffsetInMinutes={0}
                        value={date}
                        mode = {mode}
                        is24Hour={true}
                        display="default"
                        onChange={onChange}
                    />
                )}

        </View>
    )
}

export default Register;


//enum="password"