import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Photo } from './styles';

interface IPhotoUserProps {
  uri?: string;
}

export function PhotoUser({ uri }: IPhotoUserProps) {
  return (
    <Container>
      {uri ? <Photo source={{ uri }} /> : <Feather name="user" size={40} />}
    </Container>
  );
}
