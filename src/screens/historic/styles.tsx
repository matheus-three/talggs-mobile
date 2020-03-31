import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        marginTop: Constants.statusBarHeight,
        backgroundColor: '#F7F6EE',
        height: '100%',
        
    },
    containerLine: {
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    boleto: {
        paddingHorizontal: 21,
        marginHorizontal: 21,
        marginBottom: 20,
        borderLeftWidth: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#101D25',
    },
    date: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#A4A4A7',
    },
    value: {
        fontSize: 16,
        color: '#101D25',
    }
})

export default styles