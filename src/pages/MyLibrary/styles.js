import { StyleSheet } from 'react-native';

import colors from '../../utils/colors.json';

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: colors["secondary"],
        padding: 10
    },

    title: {
        color: '#fff',
        fontSize: 30,
        marginTop: 10,
        fontWeight: 'bold'
    },

    titleSecondary: {
        color: '#fff',
        fontSize: 30,
        marginTop: 10,
        marginLeft: 20,
        fontWeight: 'bold',
        opacity: 0.5
    },

    headerContainer: {
        flexDirection: 'row'
    },

    bodyTitle: {
        color: '#fff',
        fontWeight: 'bold',
        marginRight: 40,
    },

    bodyTitleSelected: {
        backgroundColor: '#25D060',
        height: 2,
        maxWidth: 60
    },

    titleContainer: {
        flexDirection: 'row',
        marginTop: 20
    },

    searchContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 30
    },

    searchBox: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#424244',
        borderRadius: 4,
        height: 40,
        width: 300,
    },

    searchBoxInput: {
        flex: 1,
        paddingTop: 10,
        paddingRight: 10,
        paddingBottom: 10,
        paddingLeft: 0,
        backgroundColor: '#424244'
    },

    searchBoxIcon: {
        padding: 10
    },

    searchButton: {
        backgroundColor: '#424244',
        width: 70,
        height: 40,
        borderRadius: 4,
        padding: 10,
        flexDirection: 'column',
        alignItems: 'center'
    },

    searchButtonText: {
        color: '#fff'
    },

    playlistsContainer: {
        marginTop: 20
    },

    playlist: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20
    },

    playlistImg: {
        maxWidth: 80,
        maxHeight: 80,
        marginRight: 15
    },

    playlistDescription: {
        flexDirection: 'column'
    },

    playlistName: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 5
    },

    playlistOwner: {
        color: '#808084',
        marginLeft: 5
    },

    playlistOwnerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    }
});