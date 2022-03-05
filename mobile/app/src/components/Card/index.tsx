import React from 'react';
import { FlatList } from 'react-native';
import { PhotoUser } from '../PhotoUser';
import { UserDescription } from '../UserDescription';

import { Container } from './styles';

export function Card() {
  return (
    <Container>
      <PhotoUser />
      <UserDescription />
    </Container>
  );
}
