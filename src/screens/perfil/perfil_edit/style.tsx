import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#232F40',
      width: '100%',
      flex: 0, 
      height: '100%',
    },

    labelTitle: {
        fontSize: 14,
        color: '#F2C894',
        alignSelf: 'flex-start',
        marginLeft: 41,
        marginTop: 10,
        marginBottom: 10,
    },

    labelTitleAddress: {
        flexDirection: "column",
        alignSelf: 'flex-start',
        fontSize: 12,
        color: '#F7F6EE',
        marginLeft: 41,
        marginBottom: 5,
    },

    block: {
        color: '#696A6C',
    },

    input: {
        width: '80%', 
        marginBottom: 23,
        color: '#F7F6EE',
        borderBottomColor: '#F7F6EE',
        borderBottomWidth: 0.5,
        marginLeft: 10,
    },

    row: {
        flexDirection: "row",
    },

    doubleTitle: {
        flexDirection: "row",
        alignSelf: "flex-start",
    },

    number: {
        marginLeft: "53%",
    },

    city: {
        marginBottom: -12,
    },

    cityHeight: {
        marginTop: 7,
        height: 35,
    },

    halfLg: {
        width: '57%',
    },

    halfSm: {
        width: '20%',
    },

    
    buttonContainer: {
        justifyContent: 'space-around',
    },

    button: {
        width: '40%',
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2a950',
        marginBottom: 50,
        marginTop: 30,
        marginLeft: 12,
        marginRight: 12,
    },

    button_text: {
        color: '#101D25',
        fontWeight: 'bold',
        fontSize: 18,
    },
});


export default styles;
  

  