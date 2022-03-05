import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Home } from './src/Pages/Home';
import theme from './src/styles/theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* eslint-disable-next-line react/style-prop-object */}
      <StatusBar backgroundColor="transparent" translucent style="light" />
      <Home />
    </ThemeProvider>
  );
}
