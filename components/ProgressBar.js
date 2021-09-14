import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const ProgressBar = () => {
  return (
    <View style={styles.container}>
      <Text>Progress Bar goes here</Text>
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
});

export default ProgressBar;
