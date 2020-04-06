import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F7F6EE',
        height: "100%",    
    },
    containerLine: {
        width: '100%',
        height: '5%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#101D25'
    },
    title: {
        alignSelf: 'center',
        fontSize: 16,
        color: '#F7F6EE'
    },
    buttonSelected: {
        width: '30%',
        borderBottomColor: '#A7E4F2',
        borderBottomWidth: 3
    },
    button: {
        width: '30%',
    }

})

export default styles