import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Page from './src/containers/Home';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default App;
