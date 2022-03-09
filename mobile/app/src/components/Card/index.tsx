import React, { memo } from 'react';
import { IUser } from '../../dtos/IUserDTO';
import { PhotoUser } from '../PhotoUser';
import { UserDescription } from '../UserDescription';

import { Container } from './styles';

interface ICardProps {
  data: IUser;
  openModal: (data: boolean) => void;
  selectUser: (data: IUser) => void;
}

function CardComponent({ data, openModal, selectUser }: ICardProps) {
  function showModal() {
    openModal(true);
    selectUser(data);
  }
  return (
    // eslint-disable-next-line react/jsx-no-bind
    <Container onPress={showModal} activeOpacity={0.7}>
      <PhotoUser uri={data.photo} />
      <UserDescription data={data} />
    </Container>
  );
}

export const Card = memo(CardComponent, (prevProps, nextProps) =>
  Object.is(prevProps.data, nextProps.data),
);
