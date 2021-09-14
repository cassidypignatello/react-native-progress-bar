import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const ProgressBar = () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.bar}></View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonLabel}>-</Text>
        </TouchableOpacity>
      </View>
    </>
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
  button: {
    marginTop: 20,
    marginRight: 20,
    backgroundColor: '#EFF5F5',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 12,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  buttonLabel: {
    fontSize: 30,
  },
});

export default ProgressBar;
