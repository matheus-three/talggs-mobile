import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#232F40',
        height: '100%',
        width: '100%',
    },
    buttonContainer: {
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
        alignItems: 'center',
    },
    title: {
        color: '#232F40',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default styles
