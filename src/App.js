import React from 'react';
import {
  View,
  StyleSheet,
} from 'react-native';
import Maps from 'components/Maps';

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
});

const App = () => (
  <View style={styles.container}>
    <Maps />
  </View>
);

export default App;
