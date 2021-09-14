/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, ScrollView} from 'react-native';
import ProgressBar from './components/ProgressBar';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <ProgressBar />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
