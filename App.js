/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import ProgressBar from './src/components/ProgressBar';
import {Provider} from 'react-redux';
import store from './src/store';
import styled from 'styled-components';

const App = () => {
  return (
    <Provider store={store}>
      <SafeArea>
        <Scroll>
          <ProgressBar />
        </Scroll>
      </SafeArea>
    </Provider>
  );
};

const Scroll = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
    height: '100%',
    justifyContent: 'center',
  },
})``;

const SafeArea = styled.SafeAreaView``;

export default App;
