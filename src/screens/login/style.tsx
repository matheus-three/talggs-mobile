import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: { 
      backgroundColor: '#232F40',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      width: '100%',
    },

    button: {
        width: '80%',
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2a950',
    },

    buttonText: {
        color: '#2D4F6C',
        fontWeight: 'bold',
        fontSize: 20,
    },

    text: {
        marginTop: 30,
        color: '#f2a950', 
        fontSize: 12,
    },

    input: {
        width: '80%', 
        marginBottom: 33,
        paddingLeft: 35,
        color: '#F7F6EE',
        borderBottomColor: '#F7F6EE',
        borderBottomWidth: 1,
    },
});


export default styles;