import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Filters } from '../../components/Filters';
import { Header } from '../../components/Header';

import { Container } from './styles';

export function Home() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header />
        <Filters />
      </Container>
    </TouchableWithoutFeedback>
  );
}
