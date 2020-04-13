import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#232F40',
        height: '100%',
        width: '100%',
    },
    container: {
        alignItems: 'center'
    },
    couponContainer: {
        width:'90%',
        justifyContent: 'space-between',
        backgroundColor: '#F7F6EE',
        marginTop: '5%',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: "#F7F6EE",
        paddingHorizontal: 24,
        paddingVertical: 13,
    },
    chevronRight: {
        padding: 0,
    },
    header: {
        flexDirection: 'row', 
        alignItems: 'center' 
    },
    title: {
        color: '#232F40',
        fontSize: 20,
        fontWeight: 'bold',
        marginLeft: '10%',
    },
    points: {
        color: '#F2A950',
        fontWeight: 'bold',
        fontSize: 25,
        marginLeft: '20%',
    },
    label: {
        width: '60%',
        color:'#BEBCBC',
        fontSize: 20,
    },
    containerLine: {
        width: '60%',
        marginTop: '2%',
        marginRight: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    items: {
        marginLeft: '5%',
        width: '60%',
        fontSize: 16,
        color: '#2D4F6C'
    },
    generateCoupons: {
        fontSize: 16,
        color: '#2D4F6C',
        fontWeight: 'bold',
    },
    containerGenerateCoupons: {
        marginTop: '2%',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    containerItems: {
        flexDirection: 'row', 
        alignItems: 'center',
        marginBottom: '2%'
    },
});

export default styles

