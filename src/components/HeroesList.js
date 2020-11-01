import React, { useState } from 'react';
import { View, Text, Modal } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import api from '../services/api';
import Icon from 'react-native-vector-icons/MaterialIcons';

Icon.loadFont();

export default function HeroesList({ heroes, page, handleChangePage }) {
  const [selectedHero, setSelectedHero] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleHeroInfoModal = (hero) => {
    setShowModal(true);
    setSelectedHero(hero);
  };

  const handleChangePage = (changePage) => {
    let newPage = changePage + page;
    if (newPage >= 0) changePage(newPage);
  };

  return (
    <FlatList
      data={heroes}
      keyExtractor={(heroes) => heroes.id}
      renderItem={(hero) => (
        <TouchableOpacity
          style={styles.button}
          onPress={() => handleHeroInfoModal(hero.Character)}
        >
          <View style={styles.container}>
            <Text style={styles.repository}>{hero.name}</Text>
            <Images
              source={heroes.Character.thumbnail}
              style={styles.heroLogo}
            ></Images>
          </View>
        </TouchableOpacity>
      )}
    >
      <Modal transparent={true} visible={showModal}>
        <View style={styles.modalView}>
          <View style={styles.modalBox}>
            <Image
              source={selectedHero.thumbnail}
              style={styles.modalImage}
            ></Image>

            <Text style={styles.modalText}>{selectedHero.name}</Text>
            <Text style={styles.modalText}>{selectedHero.description}</Text>

            <TouchableOpacity
              style={styles.button}
              onPress={() => setShowModal(false)}
            >
              <Text style={styles.buttonText}>Curtir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleChangePage(1)}
      >
        <Icon name="caretright" size={20} color="#FFF" />
      </TouchableOpacity>

      <Text style={style.footerText}>{page}</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => handleChangePage(-1)}
      >
        <Icon name="caretleft" size={20} color="#FFF" />
      </TouchableOpacity>
    </FlatList>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a50000',
  },
  repository: {
    fontSize: 32,
    fontFamily: 'Bangers-Regular',
  },
  heroLogo: {
    width: 100,
    height: 100,
  },
  modalView: {
    backgroundColor: '#000000aa',
    flex: 1,
  },
  modalBox: {
    backgroundColor: '#ffffff',
    margin: 50,
    padding: 50,
    borderRadius: 10,
    flex: 1,
  },
  modalImage: {
    width: 300,
    height: 300,
  },
  modalText: {
    fontSize: 50,
    fontFamily: 'Bangers-Regular',
  },
  button: {
    marginTop: 10,
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    marginRight: 10,
    color: '#fff',
    backgroundColor: '#powderblue',
    padding: 15,
  },

  footerText: {
    fontSize: 12,
    fontFamily: 'Bangers-Regular',
  },
});
