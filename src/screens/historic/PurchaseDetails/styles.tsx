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
    star: {
        marginLeft: 2,
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
        flexWrap: 'wrap',
    },
    extra: {
        height: 50,
    }
});


export default styles;