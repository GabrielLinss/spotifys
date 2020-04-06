import { StyleSheet } from 'react-native';

import colors from '../../utils/colors.json';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors["secondary"]
    },

    header: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: colors["secondary"]
    },

    title: {
        padding: 20,
        fontSize: 25,
        marginBottom: 15,
        color: '#fff',
        fontWeight: 'bold'
    },

    albumList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 10
    },

    album: {
        backgroundColor: colors["secondary"],
        marginBottom: 20,
        maxHeight: 110,
        maxWidth: 110
    },

    detailsButton: {
        alignItems: 'flex-start'
    },

    image: {
        maxWidth: 110,
        maxHeight: 110,
        resizeMode: 'contain'
    },

    detailsButtonText: {
        color: '#fff',
        fontSize: 11,
        fontWeight: 'bold'
    },

    playlists: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 5
    },

    playlistButton: {
        backgroundColor: colors["terciary"],
        maxHeight: 60,
        maxWidth: 170,
        margin: 5,
        borderRadius: 8
    },

    playlistImage: {
        maxWidth: 60,
        maxHeight: 60,
        resizeMode: 'contain',
        marginRight: 5
    },

    playlist: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    player: {
        top: 125,
        maxHeight: 90,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: colors["terciary"]
    },

    playerDetails: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    playerImage: {
        maxWidth: 60,
        maxHeight: 60,
        resizeMode: 'contain'
    },

    playerDescription: {
        marginLeft: 5
    },

    playerText: {
        color: '#fff'
    },

    playerDevices: {
        color: '#fff',
        fontSize: 12
    },

    playerButton: {
        padding: 10
    }
});