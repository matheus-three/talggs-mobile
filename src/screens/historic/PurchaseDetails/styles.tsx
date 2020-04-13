import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F6EE',
        height: '100%',
        width: '100%',
        paddingHorizontal: '10%',
        paddingTop: 20,
    },
    containerInfos: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 29
    },
    containerTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    containerLine: {
        flexDirection: 'row',
        marginBottom: 29,
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
        alignSelf: 'center',
    },
    totalInstallments: {
        fontSize: 18,
        color: '#101D25',
        fontWeight: 'bold',
        alignSelf: 'center',
    },
    star: {
        marginLeft: 2,
        alignSelf: 'center',
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
        marginTop: 8,
    },
    button: {
        width: '55%',
        height: 50,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2a950',
        marginBottom: 30,
        marginTop: 30,
        alignSelf: 'center'
    },
    buttonText: {
        color: '#F7F6EE',
        fontWeight: 'bold',
        fontSize: 18,
    },
    productTitle: {
        fontSize: 16,
        color: '#BEBCBC',
        fontWeight: 'bold',
    },
    productItems: {
        fontSize: 16,
        color: '#232F40',
        fontWeight: 'bold',
        width: '15%',
        marginBottom: 8,
    },
    productItemsDesc: {
        width: '30%',
        marginBottom: 8,
        fontSize: 16,
        color: '#232F40',
        fontWeight: 'bold',
    },
    containerItems: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 10,
        marginBottom: 15,
        flexWrap: 'wrap',
    },
    extra: {
        height: 50,
    }
});


export default styles;