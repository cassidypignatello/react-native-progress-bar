import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {incrementAction, decrementAction} from '../actions';
import store from '../store';

const ProgressBar = () => {
  const dispatch = useDispatch();
  const currentProgress = useSelector(state => state.progress);

  console.log(store.getState());

  return (
    <>
      <View style={styles.container}>
        <View style={[styles.bar, {width: currentProgress + '%'}]}></View>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(incrementAction)}>
          <Text style={styles.buttonLabel}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(decrementAction)}>
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
