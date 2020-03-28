import {StyleSheet} from 'react-native';
    
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#232F40',
      width: '100%',
      flex: 0, 
      height: '100%',
    },

    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#101D35',
        alignItems: "center",
    },

    header_title: {
        color: '#F7F6EE',
        alignItems: 'flex-end',
        marginLeft: 30,
        fontSize: 20,
        marginTop: 10,
    },
    
    header_btn: {
        marginTop: 10,
        marginLeft: 20,
    },

    labelTitle: {
        fontSize: 14,
        color: '#F2C894',
        alignSelf: 'flex-start',
        marginLeft: 41,
        marginTop: 10,
        marginBottom: 10,
    },

    input: {
        width: '80%', 
        marginBottom: 23,
        color: '#F7F6EE',
        borderBottomColor: '#F7F6EE',
        borderBottomWidth: 0.5,
        marginLeft: 10,
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
        marginBottom: 40,
        marginTop: 50,
        marginLeft: 12,
        marginRight: 12,
    },

    button_text: {
        color: '#101D25',
        fontWeight: 'bold',
        fontSize: 18,
    },

    row: {
        flexDirection: "row",
    },

    halfLg: {
        width: '57%',
    },

    halfSm: {
        width: '20%',
    },

});


export default styles;
  

  