'use client'

import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import theme from './theme';
import Home from './Home/page';
import { StoreProvider } from './storeProvider';

export default function IndexPage() {

  return (
    <StoreProvider>
      <ThemeProvider theme={theme}>
        <Reset />
        <Home />
      </ThemeProvider>
    </StoreProvider>
  );
}