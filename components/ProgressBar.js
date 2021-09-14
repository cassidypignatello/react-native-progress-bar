import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

const ProgressBar = () => {
  const [progress, setProgress] = useState(30);

  const incrementProgress = () => {
    setProgress(prevState => (progress > 90 ? prevState + 20 : prevState + 10));
  };

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.bar, {width: progress + '%'}]}></View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => progress < 100 && incrementProgress()}>
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
