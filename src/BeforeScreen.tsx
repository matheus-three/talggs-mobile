import * as React from 'react';
import { View } from 'react-native';
import SvgUri from "expo-svg-uri";
import { SkypeIndicator } from 'react-native-indicators';
import { StyleSheet } from 'react-native';

function BeforeScreen() {
  return (
    <View style={Styles.container}>
        <SvgUri
            width="260"
            height="260"
            source={require('../assets/Logo1.svg')}
        />
       <SkypeIndicator style={Styles.charging} color='#A7E4F2' />       
    </View>
  );
}

export const Styles = StyleSheet.create({
  container: {
    height: '100%', 
    backgroundColor: '#232F40',    
    alignItems: 'center', 
    justifyContent: 'center',
  },
  charging: {
    position: 'absolute',
    bottom: 150,
  },
})

export default BeforeScreen