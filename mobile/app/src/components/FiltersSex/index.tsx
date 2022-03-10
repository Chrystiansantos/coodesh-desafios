import React from 'react';
import { FontAwesome } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Container, TitleSelect, BoxSex, ButtonSex } from './styles';

interface ISex {
  male: boolean;
  female: boolean;
}

interface IFiltersSexProps {
  selectSex: (data: 'male' | 'female') => void;
  sex: ISex;
}

export function FiltersSex({ selectSex, sex }: IFiltersSexProps) {
  const { colors } = useTheme();
  return (
    <Container>
      <TitleSelect>Selecione</TitleSelect>
      <BoxSex>
        <ButtonSex
          select={sex.female}
          bgColor={colors.red_opacity}
          onPress={() => selectSex('female')}
        >
          <FontAwesome name="female" size={36} color="red" />
        </ButtonSex>
        <ButtonSex
          select={sex.male}
          bgColor={colors.blue_opacity}
          onPress={() => selectSex('male')}
        >
          <FontAwesome name="male" size={36} color="blue" />
        </ButtonSex>
      </BoxSex>
    </Container>
  );
}
