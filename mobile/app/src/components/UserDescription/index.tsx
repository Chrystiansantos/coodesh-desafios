import React from 'react';

import {
  Container,
  BoxTitle,
  Name,
  PhoneNumber,
  BoxSubtitle,
  Sex,
  BirthDate,
} from './styles';

export function UserDescription() {
  return (
    <Container>
      <BoxTitle>
        <Name>Chrystian Santos</Name>
        <PhoneNumber>(62) 9 8130-5602</PhoneNumber>
      </BoxTitle>
      <BoxSubtitle>
        <Sex>Masculino</Sex>
        <BirthDate>07/04/1998</BirthDate>
      </BoxSubtitle>
    </Container>
  );
}
