import React from 'react';
import { View, Text, Image, TouchableOpacity, FlatList } from 'react-native';
import GeneralStatusBar from '../../components/GeneralStatusBar/GeneralStatusBar';
import colors from '../../utils/colors.json';
import styles from './styles';
import { Feather } from '@expo/vector-icons';
import albumImg from '../../assets/album2.png';

export default function Search() {
  return (
    <>
      <GeneralStatusBar backgroundColor={colors["secondary"]} barStyle="light-content" />

      <View style={styles.container}>
        <Text style={styles.title}>Buscar</Text>

        <TouchableOpacity onPress={() => {}}>
          <View style={styles.input}>
            <Feather name="search" color="#000" size={24} />
            <Text style={styles.inputDescription}>Artistas, músicas ou podcasts</Text>
          </View>
        </TouchableOpacity>
        
        <FlatList
            data={[0]}
            keyExtractor={playlist => String(playlist)}
            showsVerticalScrollIndicator={false}
            renderItem={({ item: playlist }) => (
              <View style={styles.gridContainer}>
                <Text style={styles.gridTitle}>Seus gêneros favoritos</Text>

                <View style={styles.grid}>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>

                  <Text style={styles.gridTitle}>Navegar por todas as seções</Text>

                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => {}}>
                    <Image style={styles.gridImage} source={albumImg} />
                  </TouchableOpacity>
                </View>
              </View>
            )}
        />
      </View>
    </>
  );
}
