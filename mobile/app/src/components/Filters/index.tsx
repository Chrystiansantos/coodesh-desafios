import React from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Input } from '../Input';

import { Container } from './styles';

interface IFiltersProps {
  searchValue: string;
  setSearch: (data: string) => void;
  refPopover: any;
  onPressPopover: () => void;
}

export function Filters({
  setSearch,
  searchValue,
  onPressPopover,
  refPopover,
}: IFiltersProps) {
  const { colors } = useTheme();

  return (
    <Container>
      <Input
        icon="person-search"
        value={searchValue}
        onChangeText={setSearch}
      />
      <MaterialIcons
        name="filter-list-alt"
        size={38}
        ref={refPopover}
        onPress={onPressPopover}
        color={colors.white}
      />
    </Container>
  );
}
