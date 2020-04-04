import React from 'react';
import { View, Text} from 'react-native';
import SvgUri from 'expo-svg-uri';

import Style from './style';

const Header = (props) => {
    return (
        <View style={Style.header}>
            <View style={Style.id}>
                <SvgUri
                    width="50"
                    height="50"
                    source={require('../../../assets/logo.svg')}
                />
                <Text style={Style.header_name}>{props.name}</Text>
            </View>
            {props.seta === "true" && (
                <View style={Style.arrow}>
                    <SvgUri
                            fill="#F7F6EE"
                            fillAll
                            source={require('../../../assets/setinha.svg')}
                    /> 
                    <Text style={Style.header_title}>{props.title}</Text>
                </View>
            )}
            {props.seta !== "true" && (
                <View style={Style.arrow}>
                    <Text style={Style.header_onlyTitle}>{props.title}</Text>
                </View>
            )}
        </View>
    )
}

export default Header
