import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.bar}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: 100,
    padding: 16,
    backgroundColor: '#EFF5F5',
    justifyContent: 'center',
    borderRadius: 20,
  },
  bar: {
    width: '100%',
    height: 12,
    borderRadius: 36,
    backgroundColor: '#467572',
  },
});

export default ProgressBar;
