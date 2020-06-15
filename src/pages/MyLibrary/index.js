import React from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList, Image } from 'react-native';
import styles from './styles';
import GeneralStatusBar from '../../components/GeneralStatusBar/GeneralStatusBar';
import colors from '../../utils/colors.json';
import { Feather } from '@expo/vector-icons';
import albumImg from '../../assets/album2.png';

export default function MyLibrary() {
  return (
    <>
      <GeneralStatusBar backgroundColor={colors["secondary"]} barStyle="light-content" />

      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.title}>Música</Text>
          <Text style={styles.titleSecondary}>Podcasts</Text>
        </View>

        <View style={styles.titleContainer}>
          <Text style={styles.bodyTitle}>Playlists</Text>
          <Text style={styles.bodyTitle}>Artistas</Text>
          <Text style={styles.bodyTitle}>Álbuns</Text>
        </View>

        <View style={styles.bodyTitleSelected}></View>

        <View style={styles.searchContainer}>
          <View style={styles.searchBox}>
            <Feather style={styles.searchBoxIcon} name="search" color="#fff" size={18} />
            <TextInput
              style={styles.searchBoxInput}
              placeholder="Procure entre playlists"
              placeholderTextColor="#fff"
              onChangeText={() => {}}
              underlineColorAndroid="transparent" />
          </View>
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Filtros</Text>
          </TouchableOpacity>
        </View>

        <FlatList
            style={styles.playlistsContainer}
            data={[0, 1, 3, 4, 5, 6, 7]}
            keyExtractor={playlist => String(playlist)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: playlist }) => (
                <TouchableOpacity style={styles.playlist}>
                    <Image style={styles.playlistImg} source={albumImg} />
                    <View style={styles.playlistDescription}>
                      <Text style={styles.playlistName}>Playlist name</Text>
                      <View style={styles.playlistOwnerContainer}>
                        <Feather name="arrow-down-circle" color="#25D060" size={14} />
                        <Text style={styles.playlistOwner}>de Spotifys</Text>
                      </View>
                    </View>
                </TouchableOpacity>
            )}
        />
      </View>
    </>
  );
}
