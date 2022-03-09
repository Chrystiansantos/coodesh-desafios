import React, { memo } from 'react';
import { ActivityIndicator } from 'react-native';

import { Container, Title } from './styles';

function LoadingComponent() {
  return (
    <Container>
      <ActivityIndicator color="#fff" size="large" />
      <Title>Loading more ...</Title>
    </Container>
  );
}

export const Loading = memo(LoadingComponent, () => false);
