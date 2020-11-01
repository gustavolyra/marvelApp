import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import api from './services/api';
import { FlatList } from 'react-native-gesture-handler';
import HeroesList from './components/HeroesList';

export default function Heroes() {
  const [heroes, setHeroes] = useState([]);
  const [offset, setOffset] = useState(0);
  const [page, setPage] = useState(0);

  const getHeroes = async () => {
    const apiKey = '';
    const response = await api.get(
      `characters?apiKey=${apiKey}&orderBy=name&limit=20&offset=${offset}`
    );
    const data = response.data;
    setHeroes(data.results);
    console.log(data);
    setOffset(0);
  };

  useEffect(() => {
    getHeroes();
  }, []);

  const handleChangePage = (newPage) => {
    setPage(newPage);
    setOffset(newPage * 20);
    getHeroes();
  };

  return (
    <>
      <Text>Heroes</Text>
      <HeroesList
        heroes={heroes}
        page={page}
        changePage={handleChangePage}
      ></HeroesList>
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
