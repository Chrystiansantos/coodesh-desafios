import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container } from './styles';

export function PhotoUser() {
  return (
    <Container>
      <Feather name="user" size={40} />
    </Container>
  );
}
