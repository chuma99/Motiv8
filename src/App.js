import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Linking } from 'react-native';
import Root from './containers/Root';
import configureStore from './redux/store';

const { store } = configureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Root />
      </Provider>
    );
  }
}

export default App;
