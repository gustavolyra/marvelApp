import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Button,
} from 'react-native';

import { Header, Colors } from 'react-native/Libraries/NewAppScreen';

import QRCodeScanner from 'react-native-qrcode-scanner';

export default function QrCode() {
  const [scan, setScan] = useState(false);
  const [result, setResult] = useState();

  onSuccess = (e) => {
    setResult(e.data);
    setScan(false);
  };

  startScan = () => {
    setScan(true);
    setResult();
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.body}>
            {result && (
              <View style={styles.sectionContainer}>
                <Text style={styles.centerText}>{result}</Text>
              </View>
            )}
            {!scan && (
              <View style={styles.sectionContainer}>
                <Button
                  title="Iniciar Scan"
                  color="#f194ff"
                  onPress={this.startScan}
                />
              </View>
            )}
            {scan && (
              <View style={styles.sectionContainer}>
                <QRCodeScanner
                  reactivate={true}
                  showMarker={true}
                  ref={(node) => {
                    this.scanner = node;
                  }}
                  onRead={this.onSuccess}
                  topContent={
                    <Text style={styles.centerText}>Scanear QRCode!</Text>
                  }
                  bottomContent={
                    <TouchableOpacity
                      style={styles.buttonTouchable}
                      onPress={() => setScan(false)}
                    >
                      <Text style={styles.buttonText}>Cancelar Scan .</Text>
                    </TouchableOpacity>
                  }
                />
              </View>
            )}
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a50000',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    fontFamily: 'Bangers-Regular',
    padding: 16,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    fontFamily: 'Bangers-Regular',
    color: '#000',
  },
  buttonText: {
    fontSize: 20,
    fontFamily: 'Bangers-Regular',
    color: '#a50000',
  },
  buttonTouchable: {
    padding: 16,
  },
});
