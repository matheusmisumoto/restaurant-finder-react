'use client'

import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import store from '/redux/store.js'
import theme from './theme.js';
//import Home from './Home/page.jsx';
import V2 from './v2/page.jsx';

/*
import '@material/react-text-field/dist/text-field.css';
import '@material/react-material-icon/dist/material-icon.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
*/

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