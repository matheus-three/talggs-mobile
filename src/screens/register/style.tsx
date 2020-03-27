import {StyleSheet} from 'react-native';
    
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#232F40',
      alignItems: 'center',
      height: '100%',
      width: '100%',
    },

    header: {
        width: '100%',
        height: 100,
        backgroundColor: '#101D35',
        marginBottom: 37,
    },

    header_title: {
        color: '#F7F6EE',
        alignItems: 'flex-end',
        marginTop: 60,
        marginLeft: 30,
        fontSize: 20,
    },

    input: {
        width: '80%', 
        marginBottom: 33,
        color: '#F7F6EE',
        borderBottomColor: '#F7F6EE',
        borderBottomWidth: 1,
        marginLeft: 10,
    },

    birthTitle: {
        fontSize: 16,
        color: '#F2C894',
        marginRight: 66,
    },

    birthDate: {
        alignItems: "center",
        marginBottom: 33,
        justifyContent: "center",
        flexDirection: "row",
        marginLeft: 86,
        borderBottomColor: '#F7F6EE',
        borderBottomWidth: 1,
    },

    birthDate_component: {
        color: '#F7F6EE',
        width: 100,
        height: 50,
    },

    addressTitle: {
        fontSize: 16,
        color: '#F2C894',
        marginRight: 140,
        marginBottom: 20,
    },

    birthDate_date: {
        color: '#F7F6EE',
        fontSize: 16,
        width: 100,
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

    sexo: {
        width: 200,
    },

    button: {
        width: '80%',
        height: 60,
        borderRadius: 50,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f2a950',
        marginBottom: 20,
    },
        
    button_text: {
        color: '#2D4F6C',
        fontWeight: 'bold',
        fontSize: 20,
    },

});


export default styles;
  

  