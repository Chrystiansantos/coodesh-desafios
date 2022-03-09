import React from 'react';
import { IUser } from '../../dtos/IUserDTO';

import {
  Container,
  BoxTitle,
  Name,
  PhoneNumber,
  BoxSubtitle,
  Sex,
  BirthDate,
} from './styles';

interface IUserDescriptionProps {
  data: IUser;
}

export function UserDescription({ data }: IUserDescriptionProps) {
  return (
    <Container>
      <BoxTitle>
        <Name>{data.name}</Name>
        <PhoneNumber>{data.phone}</PhoneNumber>
      </BoxTitle>
      <BoxSubtitle>
        <Sex>{data.sex}</Sex>
        <BirthDate>{data.birthDate}</BirthDate>
      </BoxSubtitle>
    </Container>
  );
}
