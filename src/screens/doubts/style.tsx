import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    scrollContainer: {
        backgroundColor: '#F7F6EE',
        height: '100%',
        width: '100%',
    },
    container: {
        alignItems: 'center'
    },
    doubtContainer: {
        width:'100%',
        justifyContent: 'space-between',
        backgroundColor: '#F7F6EE',
        borderWidth: 0.5,
        borderColor: "#BEBCBC",
        paddingHorizontal: 26,
        paddingVertical: 16,
    },
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    title: {
        color: '#232F40D4',
        fontSize: 18,
        fontWeight: 'bold',
    },
    label: {
        width: '60%',
        color:'#BEBCBC',
        fontSize: 16,
    },
    solution: {
        marginTop: 10,
        color: '#696A6C',
    }
});

export default styles

/*

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
    header: {
        flexDirection: 'row', 
        justifyContent: 'space-between', 
        alignItems: 'center' 
    },
    title: {
        color: '#232F40',
        fontSize: 20,
        fontWeight: 'bold',
    },
    label: {
        width: '60%',
        color:'#BEBCBC',
        fontSize: 20,
    },
});

export default styles

*/