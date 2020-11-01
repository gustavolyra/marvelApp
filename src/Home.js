import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import HomeTable from './components/HomeTable';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <View
          style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
        >
          <Image
            style={styles.imageLogo}
            source={require('./assets/images/marvel_logo.png')}
          ></Image>
        </View>
        <HomeTable style={{ width: 300 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  imageLogo: {
    width: 250,
    height: 125,
  },
  container: {
    flex: 1,
    backgroundColor: '#a50000',
  },
  scrollView: {
    marginHorizontal: 20,
  },
});
