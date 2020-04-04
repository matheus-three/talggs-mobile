import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#232F40',
        width: '100%',
        flex: 0, 
        height: '100%',
      },  

      buttonContainer: {
          alignItems: 'center',
      },

      button: {
        width: '90%',
        height: 60,
        backgroundColor: "#FFF",
        borderBottomColor: '#707070',
        borderWidth: 1,
        justifyContent: 'center',
        borderRadius: 15,
        marginTop: 25,
      },

      button_text: {
        marginLeft: 20,
        color: "#101D25",
        fontSize: 20,
      }
});

export default styles