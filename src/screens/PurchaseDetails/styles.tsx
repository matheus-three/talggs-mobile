import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F6EE',
        height: '100%',
        width: '100%',
        marginTop: Constants.statusBarHeight,
        paddingHorizontal: '10%'
    },
    containerInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 29
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    containerLine: {
        flexDirection: 'row',
        marginBottom: 29
    },
    companyName: {
        fontSize: 24,
        color: '#101D25',
        fontWeight: 'bold',
    },
    totalPrice: {
        fontSize: 22,
        color:'#F2A950',
        fontWeight: 'bold',
    },
    totalPoints: {
        fontSize: 18,
        color:'#F2A950',
        fontWeight: 'bold',
    },
    title: {
        fontSize: 20,
        color: '#BEBCBC',
        fontWeight: 'bold',
    },
    infos: {
        fontSize: 18,
        color: '#101D25',
        fontWeight: 'bold',
    },
    button: {
        width: '45%',
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2a950',
        marginBottom: 40,
        marginTop: 50,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#F7F6EE',
        fontWeight: 'bold',
        fontSize: 20,
    },
    productTitle: {
        fontSize: 16,
        color: '#BEBCBC',
        fontWeight: 'bold',
    }
});


export default styles;