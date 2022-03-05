import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Input } from '../Input';

import { Container } from './styles';

export function Filters() {
  const { colors } = useTheme();

  return (
    <Container>
      <Input icon="person-search" />
      <MaterialIcons name="filter-list-alt" size={38} color={colors.white} />
    </Container>
  );
}
