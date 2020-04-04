import {StyleSheet} from 'react-native';
    
const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 130,
        backgroundColor: '#101D35',
    },

    header_name: {
        color: '#F7F6EE',
        alignItems: 'flex-end',
        marginLeft: 10,
        fontSize: 18,
    },

    header_title: {
        color: '#F7F6EE',
        alignItems: 'flex-end',
        marginLeft: 33,
        fontSize: 20,
    },

    header_onlyTitle: {
        color: '#F7F6EE',
        alignItems: 'flex-end',
        marginLeft: 57,
        fontSize: 20,
    },

    id:{
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 5,
    },

    arrow: {
        flexDirection: "row",
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10,
    }
})

export default styles;