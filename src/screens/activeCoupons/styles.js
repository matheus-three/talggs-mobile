import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#232F40',
        height: '100%',
        width: '100%',
        marginTop: Constants.statusBarHeight,
        alignItems: 'center'
    },
    couponContainer: {
        backgroundColor: '#F7F6EE',
        width: '90%',
        height: 225,
        marginTop: '10%',
        borderWidth: 1,
        borderColor: "#F7F6EE",
        borderRadius: 15,
        paddingHorizontal: 24,
        paddingVertical: 13
    },
    titleContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 15
    },
    title: {
        fontSize: 20,
        color: '#101D25',
        fontWeight: 'bold',
    },
    data: {
        fontSize: 16,
        color: '#BEBCBC',
        fontWeight: 'bold'
    },
    itemsTitle: {
        fontSize: 20,
        color: '#BEBCBC',
        fontWeight: 'bold'
    },
    containerLine: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    button: {
        width: '100%',
        height: 45,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2a950',
        marginBottom: 40,
        marginTop: 30,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#F7F6EE',
        fontWeight: 'bold',
        fontSize: 18,
    },
    items: {
        color: '#F2A950',
        fontWeight: 'bold',
        fontSize: 20,
    },
})

export default styles

