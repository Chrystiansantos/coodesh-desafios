import React from 'react';
import { FlatList } from 'react-native';
import { Card } from '../../components/Card';
import { Filters } from '../../components/Filters';
import { Header } from '../../components/Header';

import { Container, CardBox } from './styles';

export function Home() {
  const DATA = [1, 2, 3, 4, 5];
  return (
    <Container>
      <Header />
      <Filters />
      <CardBox>
        <FlatList
          data={DATA}
          renderItem={() => <Card />}
          keyExtractor={item => String(item)}
        />
      </CardBox>
    </Container>
  );
}
