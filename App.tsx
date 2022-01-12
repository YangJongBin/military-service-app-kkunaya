import React, {Component} from 'react';
import {Provider} from 'react-redux';

import Page from './src/containers/Navi';
import store from './src/store';

const App = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default App;
