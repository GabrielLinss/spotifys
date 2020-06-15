import React from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Feather, Ionicons } from '@expo/vector-icons';

import styles from './styles';

import GeneralStatusBar from '../../components/GeneralStatusBar/GeneralStatusBar';

import albumImg from '../../assets/album.png';
import albumImg2 from '../../assets/album2.png';

import colors from '../../utils/colors.json';

export default function Home() {
  const navigation = useNavigation();

  function navigateToPlaylist(playlist) {
    navigation.navigate('Playlist', { playlist });
  }

  function navigateToSettings() {
    navigation.navigate('Settings');
  }

  function navigateToMusic(music) {
    navigation.navigate('Music');
  }

  return (
    <>
      <GeneralStatusBar backgroundColor={colors["secondary"]} barStyle="light-content" />

      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => { }}>
            <Feather name="settings" size={25} color="#fff" />
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Boa tarde</Text>

        <View style={styles.playlists}>
          <TouchableOpacity
            style={styles.playlistButton}
            onPress={() => {}}>
            <View style={styles.playlist}>
              <Image source={albumImg} style={styles.playlistImage}/>
              <Text style={styles.detailsButtonText}>Forró</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playlistButton}
            onPress={() => {}}>
            <View style={styles.playlist}>
              <Image source={albumImg} style={styles.playlistImage}/>
              <Text style={styles.detailsButtonText}>Forro de Qualidade</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playlistButton}
            onPress={() => {}}>
            <View style={styles.playlist}>
              <Image source={albumImg} style={styles.playlistImage}/>
              <Text style={styles.detailsButtonText}>Internacional</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playlistButton}
            onPress={() => {}}>
            <View style={styles.playlist}>
              <Image source={albumImg} style={styles.playlistImage}/>
              <Text style={styles.detailsButtonText}>Desplugado</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playlistButton}
            onPress={() => {}}>
            <View style={styles.playlist}>
              <Image source={albumImg} style={styles.playlistImage}/>
              <Text style={styles.detailsButtonText}>Hip Hop e Trap</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.playlistButton}
            onPress={() => {}}>
            <View style={styles.playlist}>
              <Image source={albumImg} style={styles.playlistImage}/>
              <Text style={styles.detailsButtonText}>Reggae</Text>
            </View>
          </TouchableOpacity>
        </View>

        <Text style={styles.title}>Tocadas recentemente</Text>

        <View style={styles.albumList}>
          <ScrollView 
          horizontal 
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 0 }}>
            <View style={styles.album}>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => {}}
              >
                <Image style={styles.image} source={albumImg2} />
                <Text style={styles.detailsButtonText}>Forró</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.album}>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => {}}
              >
                <Image style={styles.image} source={albumImg2} />
                <Text style={styles.detailsButtonText}>Forro de Qualidade</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.album}>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => {}}
              >
                <Image style={styles.image} source={albumImg2} />
                <Text style={styles.detailsButtonText}>This Is Desejo De Menina</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.album}>
              <TouchableOpacity
                style={styles.detailsButton}
                onPress={() => {}}
              >
                <Image style={styles.image} source={albumImg2} />
                <Text style={styles.detailsButtonText}>Xand Avião</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </View>

        <View style={styles.player}>
          <TouchableOpacity
            style={styles.playerDetails}
            onPress={() => { }}
          >
            <Image style={styles.playerImage} source={albumImg} />

            <View style={styles.playerDescription}>
              <Text style={styles.playerText}>Amor De Motel - Aviões do Forró</Text>
              <Text style={styles.playerDevices}>
                <Feather name="speaker" size={15} color="#fff" />
                Dispositivos disponíveis
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.playerButton}
            onPress={() => {}}
          >
            <Ionicons name="ios-play" size={35} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}
