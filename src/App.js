import React from 'react';
import { Provider } from 'react-redux';
import Routes from './Routes';
import GlobalStyle from './styles/global';
import store from './store';

const App = () => (
  <Provider store={store}>
    <GlobalStyle />
    <Routes />
  </Provider>
);

export default App;
