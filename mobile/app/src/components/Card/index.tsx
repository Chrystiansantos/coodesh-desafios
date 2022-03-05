import React from 'react';
import { IUser } from '../../dtos/IUserDTO';
import { PhotoUser } from '../PhotoUser';
import { UserDescription } from '../UserDescription';

import { Container } from './styles';

interface ICardProps {
  data: IUser;
  openModal: (data: boolean) => void;
  selectUser: (data: IUser) => void;
}

export function Card({ data, openModal, selectUser }: ICardProps) {
  function showModal() {
    openModal(true);
    selectUser(data);
  }
  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Container onPress={showModal} activeOpacity={0.7}>
      <PhotoUser />
      <UserDescription />
    </Container>
  );
}
