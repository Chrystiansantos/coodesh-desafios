import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Input } from '../Input';

import { Container } from './styles';

interface IFiltersProps {
  searchValue: string;
  setSearch: (data: string) => void;
}

export function Filters({ setSearch, searchValue }: IFiltersProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <Input
        icon="person-search"
        value={searchValue}
        onChangeText={setSearch}
      />
      <MaterialIcons name="filter-list-alt" size={38} color={colors.white} />
    </Container>
  );
}
