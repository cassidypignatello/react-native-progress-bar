/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import ProgressBar from './src/components/ProgressBar';
import {Provider} from 'react-redux';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          contentContainerStyle={styles.contentContainer}>
          <ProgressBar />
        </ScrollView>
      </SafeAreaView>
    </Provider>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
});

export default App;
