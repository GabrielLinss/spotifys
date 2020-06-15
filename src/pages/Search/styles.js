import { StyleSheet } from 'react-native';

import colors from '../../utils/colors.json';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors["secondary"],
        padding: 10
    },

    title: {
        color: '#fff',
        fontSize: 30,
        marginTop: 10,
        fontWeight: 'bold'
    },

    input: {
        marginTop: 15,
        backgroundColor: '#fff',
        padding: 15,
        borderRadius: 8,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    inputDescription: {
        marginLeft: 10
    },

    gridContainer: {
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center'
    },

    gridTitle: {
        marginTop: 20,
        marginBottom: 20,
        marginLeft: 10,
        fontSize: 16,
        color: '#fff',
        fontWeight: 'bold'
    },

    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
    },

    gridImage: {
        maxWidth: 175,
        maxHeight: 100,
        borderRadius: 8,
        margin: 10,
    }
});