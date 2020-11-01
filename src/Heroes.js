import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import api from './services/api';
import { FlatList } from 'react-native-gesture-handler';

export default function Heroes() {
  const [heroes, setHeroes] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const getHeroes = async () => {
      const apiKey = '';
      // const response = await api.get(`characters?apiKey=${apiKey}&orderBy=name&limit=20&offset=${page}`);
      const response = await api.get(`?page=${page}&results=20`);
      const data = response.data;
      setHeroes(data);
      console.log(data);
      setPage(0);
    };
  }, []);

  const handleHeroInfo = async (id) => {};

  return (
    <>
      <SafeAreaView style={styles.container}>
        {/* <FlatList
          data={heros}
          keyExtractor={heros.Character.id}
          renderItem={(hero) => (
            <TouchableOpacity
              style={styles.button}
              onPress={() => handleHeroInfo(hero.Character.id)}
            >
              <View style={styles.heroContainer}>
                <Image
                  source={hero.Image.path}
                  style={styles.imageHeroLogo}
                ></Image>
                <Text style={styles.hero}>{hero.Character.name}</Text>
              </View>
            </TouchableOpacity>
          )}
        ></FlatList> */}
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a50000',
  },
  heroContainer: {
    marginBottom: 15,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    padding: 20,
  },
  hero: {
    fontSize: 32,
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
    backgroundColor: '#000',
    padding: 15,
  },
});
