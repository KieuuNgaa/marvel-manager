import React from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from 'material-ui/styles';
import Main from './Main';
import configureStore from './store/createStore';

const store = configureStore()

const App = () => (
  <Provider store={store}>
    <MuiThemeProvider >
      <Main />
    </MuiThemeProvider>
  </Provider>
)

export default App
