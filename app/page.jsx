'use client'

import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import store from '/redux/store.js'
import theme from './theme.js';
import V2 from './v2/page.jsx';

export default function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Reset />
        <V2 />
      </ThemeProvider>
    </Provider>
  );
}